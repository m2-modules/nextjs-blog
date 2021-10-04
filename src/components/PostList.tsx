import React, { useCallback } from 'react'

import ContentSection from './ContentSection'
import { IPost } from '../config/post.config'
import InfiniteList from '@m2-modules/infinite-list'
import PostPreviewCard from './PostPreviewCard'
import { postUtil } from '../utils'

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
