import styled from 'styled-components'

import { ICopyrightConfig } from '../config/layout.config'

const StyledParagraph = styled.p<{ align: 'left' | 'center' | 'right' }>`
  font-size: 0.8rem;
  color: #555;
  text-align: ${(props) => props.align};
  padding: 1em;
  margin: 0px;
  border-top: 1px solid #eee;
`

const Copyright = (props: ICopyrightConfig): JSX.Element => {
  const message: string = props.message
  const align: 'left' | 'center' | 'right' = props.align

  return <StyledParagraph align={align}>{message}</StyledParagraph>
}

export default Copyright
