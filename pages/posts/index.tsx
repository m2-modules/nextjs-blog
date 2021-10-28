import React from 'react'

import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'

import CommonHead from '../../src/components/CommonHead'
import PageHeading from '../../src/components/PageHeading'
import PostList from '../../src/components/PostList'
import { pathUtil, postUtil } from '../../src/utils'

const PostListPage: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter()
  const limit: number = 20

  let prevHref: string = ''
  let nextHref: string = ''

  const url: URL = new URL(pathUtil.absolutePath(router.asPath))
  const searchParams: URLSearchParams = new URLSearchParams(url.search)
  const query: string | null = searchParams.get('query')
  const page: number = Number(searchParams.get('page') || 1)

  if (!postUtil.hasPosts(page, limit, query)) router.replace('404')

  if (page > 1) {
    searchParams.set('page', String(page - 1))
    url.search = searchParams.toString()

    prevHref = url.href
  }

  if (postUtil.hasPosts(page + 1, limit, query)) {
    searchParams.set('page', String(page + 1))
    url.search = searchParams.toString()

    nextHref = url.href
  }

  return (
    <>
      <CommonHead
        customMeta={
          <>
            {prevHref ? <link rel="prev" href={prevHref} /> : ''}
            {nextHref ? <link rel="next" href={nextHref} /> : ''}
          </>
        }
      />

      <PageHeading
        title="Post"
        subMessage={` (${postUtil.getPostAll().length})`}
      />

      <PostList fetchLimit={limit} query={query || ''} />
    </>
  )
}

export default PostListPage
