import React from 'react'

import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from 'next'
import { NextRouter, useRouter } from 'next/router'

import CommonHead from '../../src/components/CommonHead'
import PostList from '../../src/components/PostList'
import { pathUtil, postUtil } from '../../src/utils'

interface PostListPageProps {
  limit: number
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PostListPageProps>> {
  const limit: number = 20
  const page: number = Number(context.query.page || 1)
  const query: string | undefined = context.query.query as string | undefined
  if (!postUtil.hasPosts(page, limit, query)) {
    return { notFound: true }
  } else {
    return { props: { limit } }
  }
}

const PostListPage: NextPage<PostListPageProps> = (
  props: PostListPageProps
): JSX.Element => {
  const router: NextRouter = useRouter()
  const limit: number = props.limit

  let prevHref: string = ''
  let nextHref: string = ''

  const url: URL = new URL(pathUtil.absolutePath(router.asPath))
  const searchParams: URLSearchParams = new URLSearchParams(url.search)
  const query: string | null = searchParams.get('query')
  const page: number = Number(searchParams.get('page') || 1)

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
      <PostList fetchLimit={limit} />
    </>
  )
}

export default PostListPage
