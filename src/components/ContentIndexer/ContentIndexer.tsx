import { Heading, organizeHeadings } from './Heading'
import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

const StyledOList = styled.ol`
  padding: 0px 40px;
`

const StyledAnchor = styled.a`
  color: #0366d6;
`

export type ContentIndexerProps = {
  content: string
}

const ContentIndexer = (props: ContentIndexerProps): JSX.Element => {
  const content: string = props.content
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    if (!content) return
    setHeadings(organizeHeadings(content))
  }, [content])

  return headings.length ? (
    <StyledOList>
      {headings.map((depth1: Heading, idx: number) => (
        <li key={`depth-1-${idx}`}>
          <StyledAnchor href={`#${depth1.id}`}>{depth1.text}</StyledAnchor>

          {depth1.hasChild() ? (
            <ol>
              {depth1.children.map((depth2: Heading, idx: number) => (
                <li key={`depth-2-${idx}`}>
                  <StyledAnchor href={`#${depth2.id}`}>
                    {depth2.text}
                  </StyledAnchor>

                  {depth2.hasChild() ? (
                    <ol>
                      {depth2.children.map((depth3: Heading, idx: number) => (
                        <li key={`depth-3-${idx}`}>
                          <StyledAnchor href={`#${depth3.id}`}>
                            {depth3.text}
                          </StyledAnchor>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    ''
                  )}
                </li>
              ))}
            </ol>
          ) : (
            ''
          )}
        </li>
      ))}
    </StyledOList>
  ) : (
    <></>
  )
}

export default ContentIndexer
