import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from 'next'
import { NextRouter, useRouter } from 'next/router'
import { pathUtil, postUtil } from '../../src/utils'

import CommonHead from '../../src/components/CommonHead'
import PageHeading from '../../src/components/PageHeading'
import PostList from '../../src/components/PostList'
import React from 'react'
import styled from 'styled-components'

export type PostListByCategoryPageProps = {
  category: string
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PostListByCategoryPageProps>> {
  const category = context.params?.category as string
  return {
    props: { category },
  }
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const categories: string[] = Object.keys(postUtil.categoriesWithStatus())
  return {
    paths: categories.map((category: string) => ({
      params: { category },
    })),
    fallback: false,
  }
}

const PostListByCategoryPage: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter()
  const limit: number = 20

  let prevHref: string = ''
  let nextHref: string = ''

  const category: string = router.query.category as string
  const url: URL = new URL(pathUtil.absolutePath(router.asPath))
  const searchParams: URLSearchParams = new URLSearchParams(url.search)
  const query: string | null = searchParams.get('query')
  const page: number = Number(searchParams.get('page') || 1)

  if (!postUtil.hasPosts(page, limit, query, category)) router.replace('/404')

  if (page > 1) {
    searchParams.set('page', String(page - 1))
    url.search = searchParams.toString()

    prevHref = url.href
  }

  if (postUtil.hasPosts(page + 1, limit, query, category)) {
    searchParams.set('page', String(page + 1))
    url.search = searchParams.toString()

    nextHref = url.href
  }

  const count: number = postUtil.getCountByCategory(category)

  return (
    <>
      <CommonHead
        description={`'${category}' 카테고리의 포스팅 목록`}
        customMeta={
          <>
            {prevHref ? <link rel="prev" href={prevHref} /> : ''}
            {nextHref ? <link rel="next" href={nextHref} /> : ''}
          </>
        }
      />

      <PageHeading title={category} subMessage={` (${count})`} />

      <PostList fetchLimit={limit} query={query || ''} category={category} />
    </>
  )
}

export default PostListByCategoryPage
