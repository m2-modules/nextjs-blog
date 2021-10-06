import React, {
  ChangeEvent,
  MouseEvent,
  RefObject,
  TransitionEvent,
  createRef,
  useCallback,
  useEffect,
  useState,
} from 'react'

import ContentSection from './ContentSection'
import { IPost } from '../config/post.config'
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

  & > input {
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
  const searchInputRef: RefObject<HTMLInputElement> =
    createRef<HTMLInputElement>()

  const [searchInputActive, setSearchInputActive] = useState<boolean>(false)
  const [posts, setPosts] = useState<IPost[]>([])

  const onSearchInputChange = useCallback(
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
      <StyledLabel>
        <Search />

        <input
          ref={searchInputRef}
          type="search"
          placeholder="Search..."
          onChange={onSearchInputChange}
        />
      </StyledLabel>
      <ContentSection>
        {posts.map((post: IPost) => (
          <PostPreviewCard key={post.title} post={post} />
        ))}
      </ContentSection>
    </>
  )
}

export default PostList
