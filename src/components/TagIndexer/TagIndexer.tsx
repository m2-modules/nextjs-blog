import styled from 'styled-components'

import { pathUtil, postUtil } from '../../utils'
import { TagsWithCount } from '../../utils/PostUtil'

const StyledNav = styled.nav`
  border-top: 1px solid #eee;
  flex: 1;
`

const StyledUl = styled.ul`
  display: block;
  list-style: none;
  margin: 10px;

  & .item {
    display: inline-block;
    background-color: #38bc8a;
    border-radius: 50px;
    padding: 5px 10px;
    margin: 5px;
  }

  & .item span:before {
    content: '#';
  }
  & .item span {
    font-size: 0.8rem;
    color: white;
  }
`

export interface TagIndexerProps extends React.HTMLProps<HTMLElement> {
  sortHandler?: (tagsWithCount: TagsWithCount) => TagsWithCount
}

function defaultSortHandler(tagsWithCount: TagsWithCount): TagsWithCount {
  const limit: number = 10
  let tagCountList: [string, number][] = Object.keys(tagsWithCount).map(
    (tagName: string) => [tagName, tagsWithCount[tagName]]
  )
  tagCountList.sort(([_tagNameA, countA], [_tagNameB, countB]) =>
    countA > countB ? -1 : countA < countB ? 1 : 0
  )
  tagCountList = tagCountList.slice(0, limit)

  return tagCountList.reduce(
    (tagsWithCount: TagsWithCount, [tagName, count]: [string, number]) => {
      tagsWithCount[tagName] = count
      return tagsWithCount
    },
    {}
  )
}

const TagIndexer = (props: TagIndexerProps): JSX.Element => {
  const sortHandler: (tagsWithCount: TagsWithCount) => TagsWithCount =
    props.sortHandler || defaultSortHandler
  const tagsWithCount: TagsWithCount = sortHandler(postUtil.tagsWithCount())

  return (
    <StyledNav>
      <StyledUl>
        {Object.keys(tagsWithCount).map((tag: string) => (
          <li key={tag} className="item">
            <a
              className="v-flex"
              href={pathUtil.absolutePath(`posts?query=${tag}`)}
            >
              <span>
                {tag} {tagsWithCount[tag]}
              </span>
            </a>
          </li>
        ))}
      </StyledUl>
    </StyledNav>
  )
}

export default TagIndexer
