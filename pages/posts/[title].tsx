import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from 'next'
import { NextRouter, useRouter } from 'next/router'
import posts, { IPost } from '../../src/config/post.config'

import CommonHead from '../../src/components/CommonHead'
import PostDetail from '../../src/components/PostDetail'
import React from 'react'
import { postUtil } from '../../src/utils'

export type PostDetailPageProps = {
  postTitle: string
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PostDetailPageProps>> {
  const postTitle = context.params?.title as string
  return {
    props: { postTitle },
  }
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: posts.map((post: IPost) => ({
      params: { title: postUtil.dashedTitle(post) },
    })),
    fallback: false,
  }
}

const PostDetailPage: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter()
  const title: string | string[] | undefined = router.query.title

  if (!title || Array.isArray(title)) {
    return <h1>No post found</h1>
  } else {
    const post: IPost = postUtil.getPostByTitle(title)
    return (
      <>
        <CommonHead
          title={post.title}
          descriptions={[post.category, post.description, ...post.tags]}
        />
        <PostDetail post={post} />
      </>
    )
  }
}

export default PostDetailPage
