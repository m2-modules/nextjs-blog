import React from 'react'

import { NextPage } from 'next'

import CommonHead from '../../src/components/CommonHead'
import PostList from '../../src/components/PostList'
import { postUtil } from '../../src/utils'

const PostListPage: NextPage = (): JSX.Element => {
  let prevHref: string = ''
  let nextHref: string = ''
  if (typeof window !== 'undefined') {
    const searchParams: URLSearchParams = new URLSearchParams(location.search)
    const query: string | null = searchParams.get('query')
    const page: number = Number(searchParams.get('page') || 1)

    if (page > 1) {
      const url: URL = new URL(location.href)
      searchParams.set('page', String(page - 1))
      url.search = searchParams.toString()

      prevHref = url.href
    }

    if (postUtil.hasNext(page, query)) {
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
      <PostList />
    </>
  )
}

export default PostListPage
