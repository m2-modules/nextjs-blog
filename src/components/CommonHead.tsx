import React from 'react'

import Head from 'next/head'
import { NextRouter, useRouter } from 'next/router'

import { blogConfig, IBlogConfig } from '../config/blog.config'
import menuConfigs, { IMenuConfig } from '../config/menu.config'

export type CommonHeadProps = {
  title?: string
  description?: string
  keywords?: string[]
}

const CommonHead = (props: CommonHeadProps): JSX.Element => {
  const router: NextRouter = useRouter()
  const menuConfig: IMenuConfig | undefined = menuConfigs.find(
    (menuConfig: IMenuConfig) => menuConfig.path === router.route
  )

  const title: string = computeTitle(props, blogConfig, menuConfig)

  const description: string | undefined =
    props.description || menuConfig?.description
  const keywords: string[] | undefined = props.keywords
  const author: string | undefined = blogConfig.author || blogConfig.email

  return (
    <Head>
      <title>{title}</title>

      <meta property="og:title" content={title} />
      {description ? (
        <>
          <meta property="og:description" content={description} />
          <meta name="description" content={description} />
        </>
      ) : (
        ''
      )}

      {keywords?.length ? (
        <meta name="keyword" content={keywords.join(', ')} />
      ) : (
        ''
      )}

      {author ? <meta name="author" content={author} /> : ''}
    </Head>
  )
}

function computeTitle(
  props: CommonHeadProps,
  blogConfig: IBlogConfig,
  menuConfig?: IMenuConfig
): string {
  return (
    props.title
      ? [blogConfig.title, props.title]
      : menuConfig?.title
      ? [blogConfig.title, menuConfig.title]
      : [blogConfig.title]
  ).join(` ${blogConfig.titleDelimiter || '|'} `)
}

export default CommonHead
