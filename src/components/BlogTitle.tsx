import { blogConfig } from '../config/blog.config'

const BlogTitle = (): JSX.Element => {
  return (
    <>
      <p id="title">{blogConfig.title}</p>
    </>
  )
}

export default BlogTitle
