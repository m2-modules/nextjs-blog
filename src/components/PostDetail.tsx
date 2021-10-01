import React, {
  createRef,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from 'react'

import Image from 'next/image'
import styled from 'styled-components'

import DrawPanel from '@m2-modules/draw-panel'
import { FormatListNumbered } from '@material-ui/icons'

import ContentIndexer from '../components/ContentIndexer/ContentIndexer'
import ContentSection from '../components/ContentSection'
import { IPost } from '../config/post.config'
import { postUtil } from '../utils'

const TitleContainer = styled.div`
  display: flex;

  & > button {
    margin: auto 0px auto auto;
    visibility: hidden;
  }

  @media only screen and (max-width: 600px) {
    & > button {
      visibility: visible;
    }
  }
`

const ContentContainer = styled.div`
  overflow: auto;
`

export type PostDetailProps = {
  post: IPost
}

const PostDetail = (props: PostDetailProps): JSX.Element => {
  const post: IPost = props.post
  const [asideOpen, setAsideOpen] = useState<boolean>(false)

  const contentContainerRef: RefObject<HTMLDivElement> =
    createRef<HTMLDivElement>()

  const toggleAsidePanel = useCallback(() => {
    setAsideOpen(!asideOpen)
  }, [asideOpen])

  const closeAsidePanel = useCallback(() => {
    setAsideOpen(false)
  }, [])

  useEffect(() => {
    async function refreshPostContent(): Promise<void> {
      const contentSection: HTMLElement | null = contentContainerRef.current
      if (!contentSection || !post) return

      const content: string = await postUtil.getContent(post)
      contentSection.innerHTML = content
    }

    refreshPostContent()
  }, [contentContainerRef, post])

  return post ? (
    <ContentSection>
      <TitleContainer>
        <h1>{post.title}</h1>
        <button className="transparent" onClick={toggleAsidePanel}>
          <FormatListNumbered />
        </button>
      </TitleContainer>

      {post.thumbnailName ? (
        <Image src={postUtil.getThumbnailSrc(post)} alt={`${post.title}`} />
      ) : (
        ''
      )}
      <DrawPanel
        position="right"
        open={asideOpen}
        closeHandler={closeAsidePanel}
      >
        <ContentIndexer />
      </DrawPanel>

      <ContentContainer ref={contentContainerRef} />
    </ContentSection>
  ) : (
    <></>
  )
}

export default PostDetail
