import { blogConfig } from '../config/blog.config'
import styled from 'styled-components'

const StyledTitle = styled.p`
  text-align: center;
`

const BlogTitle = (): JSX.Element => {
  return (
    <>
      <StyledTitle className="title">{blogConfig.title}</StyledTitle>
    </>
  )
}

export default BlogTitle
