import { pathUtil, postUtil } from '../../utils'

import { CategoriesWithStatus } from '../../utils/PostUtil'
import styled from 'styled-components'

const StyledNav = styled.nav`
  border-top: 1px solid #eee;
  flex: 1;

  & ul {
    margin: 0px;
  }
`

const StyledList = styled.li`
  padding: 10px;
  margin: 0px 10px;
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
`

export interface CategoryIndexerProps extends React.HTMLProps<HTMLElement> {}

const CategoryIndexer = (props: CategoryIndexerProps): JSX.Element => {
  const categoriesWithStatus: CategoriesWithStatus =
    postUtil.categoriesWithStatus()

  function computeClassName(categoryWithStatus: {
    count: number
    hasNew: boolean
  }): string {
    let nameFactors: string[] = ['new']
    if (!categoryWithStatus.hasNew) nameFactors.push('hidden')
    return nameFactors.join(' ')
  }

  return (
    <StyledNav>
      <ul>
        {Object.keys(categoriesWithStatus).map((category: string) => (
          <StyledList key={category}>
            <a href={pathUtil.absolutePath(`categories/${category}`)}>
              <span
                className={computeClassName(categoriesWithStatus[category])}
              >
                New
              </span>
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
