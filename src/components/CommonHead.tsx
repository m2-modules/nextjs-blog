import React from 'react'

import Head from 'next/head'
import { NextRouter, useRouter } from 'next/router'

import { blogConfig } from '../config/blog.config'
import menuConfigs, { IMenuConfig } from '../config/menu.config'
import HeadMeta from './HeadMeta'

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

  const title: string = (
    props.title
      ? [blogConfig.title, props.title]
      : menuConfig?.title
      ? [blogConfig.title, menuConfig.title]
      : [blogConfig.title]
  ).join(` ${blogConfig.titleDelimiter || '|'} `)
  const description: string | undefined = menuConfig?.description
  const keywords: string[] | undefined = props.keywords
  const author: string | undefined = blogConfig.author || blogConfig.email

  return (
    <Head>
      <HeadMeta
        title={title}
        description={description}
        keywords={keywords}
        author={author}
      />
      <title>{title}</title>
    </Head>
  )
}

export default CommonHead
