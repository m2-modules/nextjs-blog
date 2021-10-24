import { pathUtil, postUtil } from '../../utils'

import { CategoriesWithStatus } from '../../utils/PostUtil'
import styled from 'styled-components'

const StyledNav = styled.nav`
  border-top: 1px solid #eee;
  flex: 1;
`

const StyledList = styled.li`
  padding: 10px;
  margin: 10px;
  text-transform: capitalize;
  list-style: none;
  border-bottom: 1px solid #eee;

  & a {
    display: flex;
    gap: 5px;
  }

  & .new {
    border-radius: 50px;
    background-color: #fd454a;
    padding: 5px 10px;
    border-radius: 50px;
    color: white;
    font-weight: 600;
    font-style: italic;
    font-size: 0.7rem;
    margin: auto 0px;
  }

  & .category {
    margin: auto 0px;
  }

  & .count {
    padding: 5px 10px;
    border-radius: 50px;
    background-color: #666;
    font-size: 0.9rem;
    color: #eee;
  }

  &:nth-child(even) {
    color: white;
    background-color: #666;

    & .count {
      color: #666;
      background-color: #eee;
    }
  }
`

export interface CategoryIndexerProps extends React.HTMLProps<HTMLElement> {}

const CategoryIndexer = (props: CategoryIndexerProps): JSX.Element => {
  const categoriesWithStatus: CategoriesWithStatus =
    postUtil.categoriesWithStatus()

  return (
    <StyledNav>
      <ul>
        {Object.keys(categoriesWithStatus).map((category: string) => (
          <StyledList key={category}>
            <a href={pathUtil.absolutePath(`categories/${category}`)}>
              {categoriesWithStatus[category].hasNew ? (
                <span className="new">New</span>
              ) : (
                ''
              )}
              <span className="category flex-1">{category}</span>

              <span className="count">
                {categoriesWithStatus[category].count}
              </span>
            </a>
          </StyledList>
        ))}
      </ul>
    </StyledNav>
  )
}

export default CategoryIndexer
