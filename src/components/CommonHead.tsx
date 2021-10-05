import React from 'react'

import Head from 'next/head'
import { NextRouter, useRouter } from 'next/router'

import { blogConfig, IBlogConfig } from '../config/blog.config'
import { gaConfig } from '../config/ga.config'
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

  const gaID: string | undefined = gaConfig.id

  return (
    <Head>
      {gaID ? (
        // <!-- Global site tag (gtag.js) - Google Analytics -->
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', '${gaID}');
              `,
            }}
          ></script>
        </>
      ) : (
        ''
      )}
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
