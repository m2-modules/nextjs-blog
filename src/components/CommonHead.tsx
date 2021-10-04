import { NextRouter, useRouter } from 'next/router'
import menuConfigs, { IMenuConfig } from '../config/menu.config'

import Head from 'next/head'
import { blogConfig } from '../config/blog.config'

export type CommonHeadProps = {
  title?: string
  descriptions?: string[]
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

  const descriptions: string[] = []
  if (menuConfig?.description) descriptions.push(menuConfig.description)
  if (props.descriptions?.length) descriptions.push(...props.descriptions)

  return (
    <Head>
      <title>{title}</title>

      <meta property="og:title" content={title} />

      {descriptions?.length ? (
        <meta property="og:description" content={descriptions.join(',')} />
      ) : (
        ''
      )}

      <link rel="favicon" href="favicon.ico" type="image/x-icon" />
    </Head>
  )
}

export default CommonHead
