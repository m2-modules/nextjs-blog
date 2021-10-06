import React, { useEffect, useState } from 'react'

import BlogTitle from './BlogTitle'
import ContentIndexer from './ContentIndexer/ContentIndexer'
import CopyRight from './CopyRight'
import { IPost } from '../config/post.config'
import NavBar from './NavBar'
import { PostDetailPageProps } from '../../pages/posts/[title]'
import SocialLinkBar from './SocialLinkBar'
import { blogConfig } from '../config/blog.config'
import { layoutConfig } from '../config/layout.config'
import menuConfigs from '../config/menu.config'
import { postUtil } from '../utils'

export type PageLayoutProps = Partial<PostDetailPageProps> & {
  component: JSX.Element
}

const PageLayout = (props: PageLayoutProps): JSX.Element => {
  const component: JSX.Element = props.component
  const postTitle: string | undefined = props.postTitle

  const [content, setContent] = useState<string | null>(null)

  useEffect(() => {
    if (!postTitle) return setContent(null)

    const post: IPost = postUtil.getPostByTitle(postTitle)
    postUtil.getContent(post).then(setContent)
  }, [postTitle])

  return (
    <>
      <header>
        <BlogTitle />

        {blogConfig.socials ? (
          <SocialLinkBar socials={blogConfig.socials} />
        ) : (
          ''
        )}
      </header>

      <nav>
        <NavBar menus={menuConfigs} />
      </nav>

      <main>{component}</main>

      <aside>{content ? <ContentIndexer content={content} /> : ''}</aside>

      <footer>
        {layoutConfig.footer?.copyright ? (
          <CopyRight
            message={layoutConfig.footer.copyright.message}
            align={layoutConfig.footer.copyright.align}
          />
        ) : (
          ''
        )}
      </footer>
    </>
  )
}

export default PageLayout
