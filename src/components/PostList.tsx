import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'

import ContentSection from './ContentSection'
import { IPost } from '../config/post.config'
import PostPreviewCard from './PostPreviewCard'
import { postUtil } from '../utils'
import styled from 'styled-components'

const StyledInput = styled.input`
  margin: 10px 20px;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 7px;
  outline: none;
`

export interface PostListProps {
  fetchLimit?: number
}

const PostList = (props: PostListProps): JSX.Element => {
  const [posts, setPosts] = useState<IPost[]>([])

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const condition: string = event.currentTarget.value.toLowerCase()
      const postList: IPost[] = postUtil.getPostAll()
      if (condition) {
        setPosts(
          postList.filter(
            (post: IPost) => postUtil.getMeta(post).indexOf(condition) >= 0
          )
        )
      } else {
        setPosts(postList)
      }
    },
    []
  )

  useEffect(() => {
    setPosts(postUtil.getPostAll())
  }, [])

  return (
    <>
      <StyledInput
        type="search"
        placeholder="Search..."
        onChange={onChangeHandler}
      />
      <ContentSection>
        {posts.map((post: IPost) => (
          <PostPreviewCard key={post.title} post={post} />
        ))}
      </ContentSection>
    </>
  )
}

export default PostList
