import React from 'react'

import { PostDetailPageProps } from '../../pages/posts/[title]'
import { blogConfig } from '../config/blog.config'
import { layoutConfig } from '../config/layout.config'
import menuConfigs from '../config/menu.config'
import BlogTitle from './BlogTitle'
import ContentIndexer from './ContentIndexer/ContentIndexer'
import Copyright from './Copyright'
import NavBar from './NavBar'
import SocialLinkBar from './SocialLinkBar'

export type PageLayoutProps = Partial<PostDetailPageProps> & {
  component: JSX.Element
}

const PageLayout = ({ component, content }: PageLayoutProps): JSX.Element => (
  <>
    <header>
      <BlogTitle />
      {blogConfig.socials ? <SocialLinkBar socials={blogConfig.socials} /> : ''}
    </header>

    <nav>
      <NavBar menus={menuConfigs} />
    </nav>

    <main>{component}</main>

    <aside>{content ? <ContentIndexer content={content} /> : ''}</aside>

    <footer>
      {layoutConfig.footer?.copyright ? (
        <Copyright
          message={layoutConfig.footer.copyright.message}
          align={layoutConfig.footer.copyright.align}
        />
      ) : (
        ''
      )}
    </footer>
  </>
)

export default PageLayout
