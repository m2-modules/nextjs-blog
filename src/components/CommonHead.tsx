import { IBlogConfig, blogConfig } from '../config/blog.config'
import { NextRouter, useRouter } from 'next/router'
import menuConfigs, { IMenuConfig } from '../config/menu.config'

import Head from 'next/head'
import React from 'react'
import { gaConfig } from '../config/ga.config'
import { pathUtil } from '../utils'

export type CommonHeadProps = {
  title?: string
  imageURL?: string
  description?: string
  keywords?: string[]
  customMeta?: JSX.Element
}

const CommonHead = (props: CommonHeadProps): JSX.Element => {
  const router: NextRouter = useRouter()
  const menuConfig: IMenuConfig | undefined = menuConfigs.find(
    (menuConfig: IMenuConfig) => menuConfig.path === router.route
  )

  const title: string = computeTitle(props, blogConfig, menuConfig)
  const imageURL: string | undefined = props.imageURL

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

      {/* PWA manifest */}
      <link rel="manifest" href="/manifest.json" />
      {/* PWA Service worker */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
          }
        `,
        }}
      ></script>

      <link rel="canonical" href={pathUtil.absolutePath(router.asPath)} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={blogConfig.title} />
      <meta property="og:url" content={pathUtil.absolutePath(router.asPath)} />

      {imageURL ? <meta property="og:image" content={imageURL} /> : ''}
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

      {props.customMeta ? props.customMeta : <></>}
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
      ? [props.title, blogConfig.title]
      : menuConfig?.title
      ? [menuConfig.title, blogConfig.title]
      : [blogConfig.title]
  ).join(` ${blogConfig.titleDelimiter || '|'} `)
}

export default CommonHead
