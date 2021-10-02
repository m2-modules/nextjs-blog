import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from 'next'
import { NextRouter, useRouter } from 'next/router'

import { IPost } from '../../src/config/post.config'
import PostDetail from '../../src/components/PostDetail'
import React from 'react'
import { postUtil } from '../../src/utils'

export type PostDetailPageProps = {
  postTitle: string
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PostDetailPageProps>> {
  const postTitle: string | string[] | undefined = context.query.title
  if (!postTitle || Array.isArray(postTitle)) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: { postTitle },
    }
  }
}

const PostDetailPage: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter()
  const title: string | string[] | undefined = router.query.title

  if (!title || Array.isArray(title)) {
    return <h1>No post found</h1>
  } else {
    const post: IPost = postUtil.getPostByTitle(title)
    return <PostDetail post={post} />
  }
}

export default PostDetailPage
