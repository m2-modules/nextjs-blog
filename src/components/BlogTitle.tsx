import { blogConfig } from '../config/blog.config'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  text-align: center;
`

const BlogTitle = (): JSX.Element => {
  return (
    <>
      <StyledTitle>{blogConfig.title}</StyledTitle>
    </>
  )
}

export default BlogTitle
