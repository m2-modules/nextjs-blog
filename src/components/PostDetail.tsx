import React, { useCallback, useEffect, useState } from 'react'

import ContentIndexer from '../components/ContentIndexer/ContentIndexer'
import ContentSection from '../components/ContentSection'
import DrawPanel from '@m2-modules/draw-panel'
import { FormatListNumbered } from '@material-ui/icons'
import { IPost } from '../config/post.config'
import markdownStyles from '../assets/styles/markdown.module.css'
import { postUtil } from '../utils'
import styled from 'styled-components'

const StyledButton = styled.button`
  margin: auto 0px auto auto;
  visibility: hidden;

  @media only screen and (max-width: 800px) {
    visibility: visible;
  }
`

const ContentContainer = styled.div`
  padding: 20px;
`

const StyledImg = styled.img`
  width: -webkit-fill-available;
  height: 300px;
  object-fit: cover;

  @media only screen and (max-width: 800px) {
    height: 200px;
  }
`

export type PostDetailProps = {
  post: IPost
}

const PostDetail = (props: PostDetailProps): JSX.Element => {
  const post: IPost = props.post
  const [asideOpen, setAsideOpen] = useState<boolean>(false)
  const [content, setContent] = useState<string | null>(null)

  const toggleAsidePanel = useCallback(() => {
    setAsideOpen(!asideOpen)
  }, [asideOpen])

  const closeAsidePanel = useCallback(() => {
    setAsideOpen(false)
  }, [])

  useEffect(() => {
    postUtil.getContent(post).then(setContent)
  }, [post])

  return post ? (
    <>
      <StyledButton
        style={{ marginLeft: 'auto' }}
        className="transparent"
        onClick={toggleAsidePanel}
      >
        <FormatListNumbered />
      </StyledButton>

      <ContentSection>
        {post.thumbnailName ? (
          <StyledImg
            src={postUtil.getThumbnailSrc(post)}
            alt={`${post.title}`}
          />
        ) : (
          ''
        )}

        {content ? (
          <DrawPanel
            position="right"
            open={asideOpen}
            closeHandler={closeAsidePanel}
          >
            <ContentIndexer content={content} />
          </DrawPanel>
        ) : (
          ''
        )}

        <ContentContainer
          className={markdownStyles.markdown}
          dangerouslySetInnerHTML={{
            __html: content || '',
          }}
        />
      </ContentSection>
    </>
  ) : (
    <></>
  )
}

export default PostDetail
