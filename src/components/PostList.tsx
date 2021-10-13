import React, { useCallback } from 'react'

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
  fetchLimit?: number
}

const PostList = (props: PostListProps): JSX.Element => {
  const fetchLimit: number = props.fetchLimit || 5
  const fetchPosts = useCallback((): IPost[] => {
    const searchParams: URLSearchParams = new URLSearchParams(location.search)
    const query: string | undefined = searchParams
      .get('query')
      ?.toLowerCase()
      .replace(/ /g, '')
    const page: number = Number(searchParams.get('page')) || 1
    return postUtil.getPosts(page, fetchLimit, query)
  }, [fetchLimit])

  let query: string = ''
  if (typeof window !== 'undefined') {
    query = new URLSearchParams(location.search).get('query') || ''
  }

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
        <InfiniteList
          fetchHandler={(page: number) => {
            console.log('Fetched')
            const searchParams: URLSearchParams = new URLSearchParams(
              location.search
            )
            if (searchParams.has('page')) {
              searchParams.set('page', String(page))
            } else {
              searchParams.append('page', String(page))
            }
            history.pushState('', '', `?${searchParams}`)

            const posts: IPost[] = fetchPosts()

            return posts.map((post: IPost, idx: number) => (
              <PostPreviewCard key={`${post.title}${idx}`} post={post} />
            ))
          }}
        ></InfiniteList>
      </ContentSection>
    </>
  )
}

export default PostList
