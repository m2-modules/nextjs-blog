import styled from 'styled-components'

const ContentSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 60vw;
  overflow: hidden;
  overflow: auto;

  @media only screen and (max-width: 600px) {
    & {
      max-width: none;
    }
  }
`

export default ContentSection
