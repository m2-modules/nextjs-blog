import React, { useState } from 'react'

import styled from 'styled-components'

import { Heading } from './Heading'

const StyledOList = styled.ol`
  padding: 0px 40px;
`

const ContentIndexer = (): JSX.Element => {
  const [headings, setHeadings] = useState<Heading[]>([])

  // useEffect(() => {
  //   if (!content) {
  //     setHeadings([])
  //   } else {
  //     const organizedHeadings: Heading[] = organizeHeadings(content)

  //     setHeadings(organizedHeadings)
  //   }
  // }, [content])

  return headings.length ? (
    <StyledOList>
      {headings.map((depth1: Heading, idx: number) => (
        <li key={`depth-1-${idx}`}>
          <a href={`#${depth1.id}`}>{depth1.text}</a>

          {depth1.hasChild() ? (
            <ol>
              {depth1.children.map((depth2: Heading, idx: number) => (
                <li key={`depth-2-${idx}`}>
                  <a href={`#${depth2.id}`}>{depth2.text}</a>

                  {depth2.hasChild() ? (
                    <ol>
                      {depth2.children.map((depth3: Heading, idx: number) => (
                        <li key={`depth-3-${idx}`}>
                          <a href={`#${depth3.id}`}>{depth3.text}</a>
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
