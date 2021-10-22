import React, { useCallback, useEffect, useState } from 'react'

import styled from 'styled-components'

import DrawPanel from '@m2-modules/draw-panel'
import { FormatListNumbered } from '@material-ui/icons'

import markdownStyles from '../assets/styles/markdown.module.css'
import ContentIndexer from '../components/ContentIndexer/ContentIndexer'
import ContentSection from '../components/ContentSection'
import { layoutConfig } from '../config/layout.config'
import { IPost } from '../config/post.config'
import { pathUtil, postUtil } from '../utils'
import TagSpreader from './TagSpreader'
import Utterances from './Utterances'

const HeadContainer = styled.div`
  display: flex;
  flex: 1;
`

const StyledHeading = styled.h1`
  padding: 0px 20px;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  & > .description {
    font-size: 1rem;
    margin-top: 10px;
    color: #666;
    font-weight: initial;
    font-style: italic;
  }
`

const ContentContainer = styled.div`
  padding: 20px;
  overflow: auto;
`

const StyledButton = styled.button`
  margin: auto 0px auto auto;
  display: none;

  @media only screen and (max-width: 800px) {
    display: block;
  }
`

const StyledImg = styled.img`
  width: -webkit-fill-available;
  height: 300px;
  object-fit: cover;
  margin-bottom: 20px;

  @media only screen and (max-width: 800px) {
    height: 200px;
  }
`

export type PostDetailProps = {
  post: IPost
  scrollHandler: () => void
}

const PostDetail = (props: PostDetailProps): JSX.Element => {
  const post: IPost = props.post
  const scrollHandler: () => void = props.scrollHandler
  const [asideOpen, setAsideOpen] = useState<boolean>(false)
  const [content, setContent] = useState<string | null>(null)

  const linkBuilder: (tag: string) => string = (tag: string): string => {
    const searchParams: URLSearchParams = new URLSearchParams()
    searchParams.append('query', tag)

    return pathUtil.absolutePath(`posts?${searchParams.toString()}`)
  }

  const toggleAsidePanel = useCallback(() => {
    setAsideOpen(!asideOpen)
  }, [asideOpen])

  const closeAsidePanel = useCallback(() => {
    setAsideOpen(false)
  }, [])

  useEffect(() => {
    postUtil.getContent(post).then(setContent)
  }, [post])

  return post ? (
    <>
      <HeadContainer>
        <StyledHeading>
          <span className="title">{post.title}</span>
          <span className="description">{post.description}</span>
        </StyledHeading>

        <StyledButton className="transparent" onClick={toggleAsidePanel}>
          <FormatListNumbered />
        </StyledButton>
      </HeadContainer>

      <ContentContainer onScroll={scrollHandler}>
        <ContentSection>
          {post.thumbnailName ? (
            <StyledImg
              src={postUtil.getThumbnailSrc(post)}
              alt={`${post.title}`}
            />
          ) : (
            ''
          )}

          {content ? (
            <DrawPanel
              position="right"
              open={asideOpen}
              closeHandler={closeAsidePanel}
            >
              <ContentIndexer content={content} />
            </DrawPanel>
          ) : (
            ''
          )}

          <div
            className={markdownStyles.markdown}
            dangerouslySetInnerHTML={{
              __html: content || '',
            }}
          />

          <h2>Tags</h2>
          <TagSpreader tags={post.tags} linkBuilder={linkBuilder} />

          {layoutConfig.postDetail?.utterances ? (
            <>
              <h2>Comments</h2>
              <Utterances
                repo={layoutConfig.postDetail.utterances.repo}
                theme={layoutConfig.postDetail.utterances.theme}
                issueTerm={layoutConfig.postDetail.utterances.issueTerm}
                issueLabel={layoutConfig.postDetail.utterances.issueTerm}
              />
            </>
          ) : (
            ''
          )}
        </ContentSection>
      </ContentContainer>
    </>
  ) : (
    <></>
  )
}

export default PostDetail
