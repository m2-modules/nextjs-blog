import { ICopyrightConfig } from '../config/layout.config'
import styled from 'styled-components'

const StyledParagraph = styled.p<{ align: 'left' | 'center' | 'right' }>`
  font-size: 0.8rem;
  color: #555;
  text-align: ${(props) => props.align};
  padding: 1em;
  margin: 0px;
  border-top: 1px solid #eee;
`

const CopyRight = (props: ICopyrightConfig): JSX.Element => {
  const message: string = props.message
  const align: 'left' | 'center' | 'right' = props.align

  return <StyledParagraph align={align}>{message}</StyledParagraph>
}

export default CopyRight
