import styled from 'styled-components'

const ContentSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 60vw;
  overflow: auto;

  @media only screen and (max-width: 800px) {
    & {
      max-width: none;
    }
  }
`

export default ContentSection
