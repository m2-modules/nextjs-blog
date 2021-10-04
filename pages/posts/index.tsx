import CommonHead from '../../src/components/CommonHead'
import { NextPage } from 'next'
import PostList from '../../src/components/PostList'
import React from 'react'

const PostListPage: NextPage = (): JSX.Element => {
  return (
    <>
      <CommonHead />
      <PostList />
    </>
  )
}

export default PostListPage
