import React from 'react'

import styled from 'styled-components'

export interface TagSpreaderProps {
  tags: string[]
}

const StyledTagSpreaderList = styled.ul`
  display: inline-flex;
  gap: 10px;
  list-style: none;
  & > li {
    border-radius: 10px;
    background-color: #333;
    color: white;
    padding: 7px;
    font-size: 9pt;
  }
  & > li:before {
    content: '#';
  }
`

const TagSpreader = (props: TagSpreaderProps): JSX.Element => {
  const tags: string[] = props.tags

  return (
    <StyledTagSpreaderList>
      {tags.map((tag: string) => (
        <li key={tag}>{tag}</li>
      ))}
    </StyledTagSpreaderList>
  )
}

export default TagSpreader
