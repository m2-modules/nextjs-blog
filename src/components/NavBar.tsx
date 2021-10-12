import { IMenuConfig } from '../config/menu.config'
import { pathUtil } from '../utils'
import styled from 'styled-components'

export interface NavBarProps {
  menus: IMenuConfig[]
}

const NavBarStyledUL = styled.ul`
  display: flex;
  margin: auto;
  padding: 0px;
  list-style: none;
  gap: 20px;
  & > :first-child {
    margin-left: auto;
  }
  & > :last-child {
    margin-right: auto;
  }
`

const NavBar = (props: NavBarProps): JSX.Element => {
  return (
    <NavBarStyledUL>
      {props.menus.map((menu: IMenuConfig, idx: number) => (
        <li key={`menu-${idx}`}>
          <a href={pathUtil.absolutePath(menu.path)}>{menu.title}</a>
        </li>
      ))}
    </NavBarStyledUL>
  )
}

export default NavBar
