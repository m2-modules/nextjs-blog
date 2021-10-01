import React from 'react'

import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'

import PostDetail from '../../src/components/PostDetail'
import { IPost } from '../../src/config/post.config'
import { postUtil } from '../../src/utils'

const PostDetailPage: NextPage = (): JSX.Element => {
  const router: NextRouter = useRouter()

  const title: string = router.query.title as string
  console.log(title)
  if (title) {
    const post: IPost = postUtil.getPostByTitle(title)
    return <PostDetail post={post} />
  } else {
    return <h1>No post found</h1>
  }
}

export default PostDetailPage
