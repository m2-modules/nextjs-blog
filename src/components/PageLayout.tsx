import BlogTitle from './BlogTitle'
import NavBar from './NavBar'
import React from 'react'
import SocialLinkBar from './SocialLinkBar'
import { blogConfig } from '../config/blog.config'
import menuConfigs from '../config/menu.config'

export type PageLayoutProps = {
  component: JSX.Element
}

const PageLayout = (props: PageLayoutProps): JSX.Element => {
  const component: JSX.Element = props.component

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

      <aside></aside>

      <footer></footer>
    </>
  )
}

export default PageLayout
