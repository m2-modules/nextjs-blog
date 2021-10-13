import React, { useCallback } from 'react'

import ContentSection from './ContentSection'
import { IPost } from '../config/post.config'
import InfiniteList from '@m2-modules/infinite-list'
import PostPreviewCard from './PostPreviewCard'
import { Search } from '@material-ui/icons'
import { postUtil } from '../utils'
import styled from 'styled-components'

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
  const fetchPosts = useCallback(
    (page: number, limit: number, query: string | null): IPost[] => {
      return postUtil.getPosts(page, limit, query)
    },
    []
  )

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
          fetchHandler={(listPage: number) => {
            const searchParams: URLSearchParams = new URLSearchParams(
              location.search
            )
            const query: string | null = searchParams.get('query')
            let page: number = listPage
            let limit: number = fetchLimit

            if (searchParams.get('page')) {
              page = Number(searchParams.get('page'))

              if (listPage === 1) {
                limit = (page - listPage + 1) * fetchLimit
                page = 1
              }
            }

            const posts: IPost[] = fetchPosts(page, limit, query)

            if (posts.length) {
              searchParams.set('page', String(listPage - 1 + page))
              history.pushState('', '', `?${searchParams.toString()}`)
            }

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
