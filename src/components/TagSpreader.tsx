import React from 'react'

import styled from 'styled-components'

import TagMark from './TagMark'

const StyledTagSpreaderList = styled.ul`
  display: block;
  gap: 10px;
  list-style: none;
  margin: 0px;
`

export interface TagSpreaderProps {
  tags: string[]
}

const TagSpreader = (props: TagSpreaderProps): JSX.Element => {
  const tags: string[] = props.tags

  return (
    <StyledTagSpreaderList>
      {tags.map((tag: string) => (
        <TagMark key={tag} tag={tag} />
      ))}
    </StyledTagSpreaderList>
  )
}

export default TagSpreader
