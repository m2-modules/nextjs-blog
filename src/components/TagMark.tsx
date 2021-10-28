import styled from 'styled-components'

import { pathUtil } from '../utils'

const StyledList = styled.li`
  display: inline-block;
  border-radius: 10px;
  background-color: #333;
  padding: 5px 10px;
  margin: 5px;
  white-space: nowrap;
  & > a {
    display: flex;
  }
  & span.tag:before {
    content: '#';
  }
  & span.tag {
    margin: auto;
    content: '#';
    color: white;
    font-size: 0.8rem;
    margin: auto;
  }
  & span.count {
    color: #eee;
    font-style: italic;
    font-size: 0.5rem;
    margin: auto 0px auto 5px;
  }
`

export interface TagMarkProps {
  tag: string
  count?: number
}

const TagMark = (props: TagMarkProps): JSX.Element => {
  const tag: string = props.tag
  const count: number | undefined = props.count

  const linkBuilder: (tag: string) => string = (tag: string): string => {
    const searchParams: URLSearchParams = new URLSearchParams()
    searchParams.append('query', tag)

    return pathUtil.absolutePath(`posts?${searchParams.toString()}`)
  }

  return (
    <StyledList>
      <a href={linkBuilder(tag)}>
        <span className="tag">{tag}</span>
        {typeof count !== 'undefined' ? (
          <span className="count">({count})</span>
        ) : (
          ''
        )}
      </a>
    </StyledList>
  )
}

export default TagMark
