import React, { RefObject, useCallback, useRef, useState } from 'react'

import styled from 'styled-components'

import DrawPanel from '@m2-modules/draw-panel'
import { FormatListNumbered } from '@material-ui/icons'

import markdownStyles from '../assets/styles/markdown.module.css'
import ContentIndexer from '../components/ContentIndexer/ContentIndexer'
import ContentSection from '../components/ContentSection'
import { layoutConfig } from '../config/layout.config'
import { IPost } from '../config/post.config'
import useHeadroomShrink from '../hooks/use-headroom-shrink'
import { postUtil } from '../utils'
import TagSpreader from './TagSpreader'
import Utterances from './Utterances'

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const HeadContainer = styled.div`
  display: flex;
  padding: 0px 10px;
`

const StyledHeading = styled.h1`
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  & > .description {
    font-size: 1rem;
    margin-top: 10px;
    color: #666;
    font-weight: initial;
    font-style: italic;
  }
`

const StyledButton = styled.button`
  margin: auto 0px auto auto;
  display: none;

  @media only screen and (max-width: 800px) {
    display: block;
  }
`

const StyledImg = styled.img`
  width: -webkit-fill-available;
  height: 300px;
  object-fit: cover;
  margin-bottom: 20px;

  @media only screen and (max-width: 800px) {
    height: 200px;
  }
`

const PostDetailContentSection = styled(ContentSection)`
  padding: 0px 10px;
`

export type PostDetailProps = {
  post: IPost
  content: string
}

const PostDetail = (props: PostDetailProps): JSX.Element => {
  const post: IPost = props.post
  const content: string = props.content
  const [asideOpen, setAsideOpen] = useState<boolean>(false)

  const toggleAsidePanel = useCallback(() => {
    setAsideOpen(!asideOpen)
  }, [asideOpen])

  const closeAsidePanel = useCallback(() => {
    setAsideOpen(false)
  }, [])

  const containerRef: RefObject<HTMLElement> = useRef<HTMLElement>(null)
  useHeadroomShrink(containerRef)

  return (
    <StyledArticle>
      <HeadContainer>
        <StyledHeading>
          <span className="title">{post.title}</span>
          <span className="description">{post.description}</span>
        </StyledHeading>

        <StyledButton className="transparent" onClick={toggleAsidePanel}>
          <FormatListNumbered />
        </StyledButton>
      </HeadContainer>

      <PostDetailContentSection ref={containerRef}>
        <DrawPanel
          position="right"
          open={asideOpen}
          closeHandler={closeAsidePanel}
        >
          <ContentIndexer content={content} />
        </DrawPanel>

        {post.thumbnailName ? (
          <StyledImg
            src={postUtil.getThumbnailPath(post)}
            alt={`${post.title}`}
          />
        ) : (
          ''
        )}

        <div
          className={markdownStyles.markdown}
          dangerouslySetInnerHTML={{
            __html: content || '',
          }}
        />

        <h2>Tags</h2>
        <TagSpreader tags={post.tags} />

        {layoutConfig.postDetail?.utterances ? (
          <>
            <h2>Comments</h2>
            <Utterances
              repo={layoutConfig.postDetail.utterances.repo}
              theme={layoutConfig.postDetail.utterances.theme}
              issueTerm={layoutConfig.postDetail.utterances.issueTerm}
              issueLabel={layoutConfig.postDetail.utterances.issueTerm}
            />
          </>
        ) : (
          ''
        )}
      </PostDetailContentSection>
    </StyledArticle>
  )
}

export default PostDetail
