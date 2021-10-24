import styled from 'styled-components'

const StyledHeading = styled.h1`
  font-size: 1rem;
  margin: 20px;

  & > .sub-message {
    font-size: 0.8rem;
    color: #666;
  }
`

export interface PageHeadingProps extends React.HTMLProps<HTMLHeadElement> {
  title: string
  subMessage?: string
}

const PageHeading = (props: PageHeadingProps): JSX.Element => (
  <StyledHeading>
    <span className="title">{props.title}</span>
    {props.subMessage ? (
      <span className="sub-message">{props.subMessage}</span>
    ) : (
      ''
    )}
  </StyledHeading>
)

export default PageHeading
