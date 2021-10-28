import React, { RefObject, useRef } from 'react'

import styled from 'styled-components'

import ContentSection from '../components/ContentSection'
import TagMark from '../components/TagMark'
import useHeadroomShrink from '../hooks/use-headroom-shrink'
import { postUtil } from '../utils'
import { TagsWithCount } from '../utils/PostUtil'

const StyledNav = styled.nav`
  margin: 10px 20px;
  padding: 10px;

  & > ol {
    padding: 0px;
    margin: 0px;
  }

  & > ol .link-item {
    display: inline-block;
    margin: auto;
    font-size: 0.9rem;
    margin: 5px;
  }
  & > ol .active-link {
    color: #333;
    border-bottom: 1px solid #333;
  }
  & > ol .non-active-link {
    color: #999;
  }
`

const StyledContentSection = styled(ContentSection)`
  margin: 0px 20px 20px 20px;

  & h2 {
    padding: 10px 0px;
    margin: 0px 0px 10px 0px;
    border-bottom: 1px solid #eee;
  }

  & > ol {
    padding: 0px;
    margin: 0px;
  }
`

function toCharCode(char: string): number {
  return char.charCodeAt(0)
}

function toChar(charCode: number): string {
  return String.fromCharCode(charCode)
}

const korStandards = [
  '가',
  '나',
  '다',
  '라',
  '마',
  '바',
  '사',
  '아',
  '자',
  '차',
  '카',
  '타',
  '하',
]
const engStandards = Array(26)
  .fill('')
  .map((_: string, idx: number) => String.fromCharCode(idx + 65))
const combinedStandards: string[] = [...korStandards, ...engStandards]
const charCodeStandards: number[] = [...korStandards, ...engStandards].map(
  (char: string) => toCharCode(char)
)

const TagList = (): JSX.Element => {
  const tagMap: Map<string, TagsWithCount> = new Map<string, TagsWithCount>(
    combinedStandards.map((std: string) => [std, {}])
  )
  const tagsWithCount: TagsWithCount = postUtil.tagsWithCount()
  Object.keys(tagsWithCount).forEach((tagName: string) => {
    const count: number = tagsWithCount[tagName]
    const charCode: number = toCharCode(tagName.toUpperCase())
    const stdCharCode: number | undefined = charCodeStandards.find(
      (currentStd: number, idx: number) => {
        const nextStd: number = charCodeStandards[idx + 1]
        if (!nextStd) return true

        return charCode >= currentStd && charCode < nextStd
      }
    )
    if (!stdCharCode) return

    const stdChar: string = toChar(stdCharCode)
    const foundTagsWithCount: TagsWithCount = tagMap.get(
      stdChar
    ) as TagsWithCount
    foundTagsWithCount[tagName] = count
  })

  const tagList: [string, TagsWithCount][] = Array.from(tagMap).filter(
    ([_stdChar, tagsWithCount]: [string, TagsWithCount]) =>
      Object.keys(tagsWithCount).length
  )

  const containerRef: RefObject<HTMLElement> = useRef<HTMLElement>(null)
  useHeadroomShrink(containerRef)

  return (
    <>
      <StyledNav className="v-flex">
        <ol>
          {korStandards.map((stdChar: string) => {
            if (Object.keys(tagMap.get(stdChar) || {}).length) {
              return (
                <a key={stdChar} href={`#${stdChar}`}>
                  <span className="link-item active-link">{stdChar}</span>
                </a>
              )
            } else {
              return (
                <span key={stdChar} className="link-item non-active-link">
                  {stdChar}
                </span>
              )
            }
          })}
        </ol>

        <ol>
          {engStandards.map((stdChar: string) => {
            if (Object.keys(tagMap.get(stdChar) || {}).length) {
              return (
                <a href={`#${stdChar}`}>
                  <span className="link-item active-link">{stdChar}</span>
                </a>
              )
            } else {
              return (
                <span className="link-item non-active-link" key={stdChar}>
                  {stdChar}
                </span>
              )
            }
          })}
        </ol>
      </StyledNav>

      <StyledContentSection ref={containerRef}>
        <ol>
          {tagList.map(([stdChar, tagsWithCount]: [string, TagsWithCount]) => (
            <>
              <h2 id={stdChar}>{stdChar}</h2>
              {Object.keys(tagsWithCount)
                .sort()
                .map((tag: string) => (
                  <TagMark key={tag} tag={tag} count={tagsWithCount[tag]} />
                ))}
            </>
          ))}
        </ol>
      </StyledContentSection>
    </>
  )
}

export default TagList
