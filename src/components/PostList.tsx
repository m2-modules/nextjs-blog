import React, { useCallback } from 'react'

import InfiniteList from '@m2-modules/infinite-list'

import { IPost } from '../config/post.config'
import { postUtil } from '../utils'
import ContentSection from './ContentSection'
import PostPreviewCard from './PostPreviewCard'

export interface PostListProps {
  fetchLimit?: number
}

const PostList = (props: PostListProps): JSX.Element => {
  const fetchLimit: number = props.fetchLimit || 10

  const fetchHandler = useCallback(
    (page: number) => {
      const fetchedPosts: IPost[] = postUtil.getPosts(page, fetchLimit)
      return fetchedPosts.map((post: IPost) => (
        <PostPreviewCard key={post.title} post={post} />
      ))
    },
    [fetchLimit]
  )

  return (
    <ContentSection>
      <InfiniteList fetchHandler={fetchHandler} />
    </ContentSection>
  )
}

export default PostList
