import { pathUtil, postUtil } from '../../utils'

import { TagsWithCount } from '../../utils/PostUtil'
import styled from 'styled-components'

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

export interface TagIndexerProps extends React.HTMLProps<HTMLElement> {}

const TagIndexer = (props: TagIndexerProps): JSX.Element => {
  const tagsWithCount: TagsWithCount = postUtil.tagsWithCount()

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
