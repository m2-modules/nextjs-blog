import React, { useCallback, useEffect, useState } from 'react'

import styled from 'styled-components'

import InfiniteList from '@m2-modules/infinite-list'
import { Search } from '@material-ui/icons'

import { IPost } from '../config/post.config'
import { postUtil } from '../utils'
import ContentSection from './ContentSection'
import PostPreviewCard from './PostPreviewCard'

const StyledLabel = styled.label`
  display: inline-flex;
  max-width: 200px;
  border-bottom: 1px solid #aaa;
  margin: 0px 20px;
  grid-gap: 10px;
  transition: all 0.5s ease-in-out;

  & > * {
    margin: auto 0px;
  }

  & input {
    flex: 1;
    padding: 10px 0px;
    border: none;
    outline: none;
  }

  @media only screen and (max-width: 800px) {
    max-width: none;
  }
`
export interface PostListProps {
  fetchLimit: number
}

const PostList = (props: PostListProps): JSX.Element => {
  const fetchLimit: number = props.fetchLimit
  const [query, setQuery] = useState<string>('')
  const [posts, setPosts] = useState<IPost[]>([])

  const onReachHandler = useCallback((): void => {
    const searchParams: URLSearchParams = new URLSearchParams(location.search)
    const page: number = Number(searchParams.get('page') || 1)

    if (posts.length === 0) {
      setPosts(postUtil.getPosts(1, page * fetchLimit, query))
    } else if (postUtil.hasPosts(page + 1, fetchLimit)) {
      setTimeout(() => {
        setPosts([...posts, ...postUtil.getPosts(page + 1, fetchLimit, query)])
        searchParams.set('page', String(page + 1))
        history.pushState('', '', `?${searchParams.toString()}`)
      }, 500)
    }
  }, [fetchLimit, posts, query])

  useEffect(() => {
    const searchParams: URLSearchParams = new URLSearchParams(location.search)
    const query: string = searchParams.get('query') || ''

    setQuery(query)
  }, [])

  return (
    <>
      <StyledLabel>
        <Search />

        <form>
          <input
            name="query"
            type="search"
            placeholder="Search..."
            defaultValue={query}
          />
        </form>
      </StyledLabel>

      <ContentSection>
        <InfiniteList onReach={onReachHandler}>
          {posts.map((post: IPost) => (
            <PostPreviewCard key={`${post.title}`} post={post} />
          ))}
        </InfiniteList>
      </ContentSection>
    </>
  )
}

export default PostList
