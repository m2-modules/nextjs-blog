import React from 'react'

import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'

import CommonHead from '../../src/components/CommonHead'
import PostList from '../../src/components/PostList'
import { postUtil } from '../../src/utils'

const PostListPage: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter()
  let prevHref: string = ''
  let nextHref: string = ''
  const limit: number = 5

  if (typeof window !== 'undefined') {
    const searchParams: URLSearchParams = new URLSearchParams(location.search)
    const query: string | null = searchParams.get('query')
    const page: number = Number(searchParams.get('page') || 1)

    if (!postUtil.hasPosts(page, limit, query)) router.replace('404')

    if (page > 1) {
      const url: URL = new URL(location.href)
      searchParams.set('page', String(page - 1))
      url.search = searchParams.toString()

      prevHref = url.href
    }

    if (postUtil.hasPosts(page + 1, limit, query)) {
      const url: URL = new URL(location.href)
      searchParams.set('page', String(page + 1))
      url.search = searchParams.toString()

      nextHref = url.href
    }
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
      <PostList fetchLimit={limit} />
    </>
  )
}

export default PostListPage
