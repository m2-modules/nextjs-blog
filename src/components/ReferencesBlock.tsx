import styled from 'styled-components'

import OpenInNewIcon from '@material-ui/icons/OpenInNew'

import { IReference } from '../config/post.config'

export interface ReferencesBlockProps {
  references: IReference[]
}

const StyledList = styled.ul`
  font-style: italic;
  border-bottom: 1px solid #eee;

  & a {
    color: #0366d6;
  }

  & .title {
    font-size: 0.9rem;
    margin: auto 10px auto 5px;
  }
`

const ReferencesBlock = (props: ReferencesBlockProps): JSX.Element => {
  const references: IReference[] = props.references

  return (
    <StyledList>
      {references.map((ref: IReference) => (
        <li key={ref.title}>
          <a href={ref.url} target="_blank" rel="noreferrer">
            <span className="title">{ref.title}</span>
            <OpenInNewIcon style={{ fontSize: '0.9rem' }} />
          </a>
        </li>
      ))}
    </StyledList>
  )
}

export default ReferencesBlock
