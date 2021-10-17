import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

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

  & > * {
    margin: auto 0px;
  }

  & > form {
    display: flex;
    flex: 1;
  }

  & input {
    flex: 1;
    padding: 10px 0px;
    border: none;
    outline: none;
  }

  & .icon {
    max-width: 1em;
  }

  @media only screen and (max-width: 800px) {
    max-width: none;
  }
`
export interface PostListProps {
  query: string
  fetchLimit: number
}

const PostList = (props: PostListProps): JSX.Element => {
  const query: string = props.query
  const fetchLimit: number = props.fetchLimit
  const [scrollAdjusted, setScrollAdjusted] = useState<boolean>(false)
  const [initialPage, setInitialPage] = useState<number>(1)
  const [posts, setPosts] = useState<IPost[]>([])
  const initialPageRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

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
      }, 1000)
    }
  }, [fetchLimit, posts, query])

  useEffect(() => {
    const searchParams: URLSearchParams = new URLSearchParams(location.search)
    const initialPage: number = Number(searchParams.get('page') || 1)

    setInitialPage(initialPage)
  }, [])

  useEffect(() => {
    const previewCard: HTMLElement | null = initialPageRef.current
    if (!previewCard || scrollAdjusted) return
    previewCard.scrollIntoView()
    setScrollAdjusted(true)
  }, [posts, scrollAdjusted])

  return (
    <>
      <StyledLabel>
        <Search className="icon" />

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
          {posts.map((post: IPost, idx: number) => (
            <div
              key={`${post.title}`}
              ref={
                (initialPage - 1) * fetchLimit === idx
                  ? initialPageRef
                  : undefined
              }
            >
              <PostPreviewCard post={post} />
            </div>
          ))}
        </InfiniteList>
      </ContentSection>
    </>
  )
}

export default PostList
