import React from 'react'
import styled from 'styled-components'

export interface TagSpreaderProps {
  tags: string[]
  linkBuilder?: (tag: string) => string
}

const StyledTagSpreaderList = styled.ul`
  display: block;
  gap: 10px;
  list-style: none;
  margin: 0px;
  & > li {
    display: inline-block;
    border-radius: 10px;
    background-color: #333;
    padding: 5px 10px;
    margin: 5px;
    white-space: nowrap;
  }
  & > li > a {
    display: flex;
  }
  & > li span:before {
    content: '#';
  }
  & > li span {
    margin: auto;
    content: '#';
    color: white;
    font-size: 9pt;
  }
`

const TagSpreader = (props: TagSpreaderProps): JSX.Element => {
  const tags: string[] = props.tags
  const linkBuilder: ((tag: string) => string) | undefined = props.linkBuilder

  return (
    <StyledTagSpreaderList>
      {tags.map((tag: string) => (
        <li key={tag}>
          {linkBuilder ? (
            <a href={linkBuilder(tag)}>
              <span>{tag}</span>
            </a>
          ) : (
            <span>{tag}</span>
          )}
        </li>
      ))}
    </StyledTagSpreaderList>
  )
}

export default TagSpreader
