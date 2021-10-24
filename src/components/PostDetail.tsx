import React, { useCallback, useEffect, useState } from 'react'
import { pathUtil, postUtil } from '../utils'

import ContentIndexer from '../components/ContentIndexer/ContentIndexer'
import ContentSection from '../components/ContentSection'
import DrawPanel from '@m2-modules/draw-panel'
import { FormatListNumbered } from '@material-ui/icons'
import { IPost } from '../config/post.config'
import TagSpreader from './TagSpreader'
import Utterances from './Utterances'
import { layoutConfig } from '../config/layout.config'
import markdownStyles from '../assets/styles/markdown.module.css'
import styled from 'styled-components'

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
}

const PostDetail = (props: PostDetailProps): JSX.Element => {
  const post: IPost = props.post
  const [asideOpen, setAsideOpen] = useState<boolean>(false)
  const [content, setContent] = useState<string | null>(null)

  const linkBuilder: (tag: string) => string = (tag: string): string => {
    const searchParams: URLSearchParams = new URLSearchParams()
    searchParams.append('query', tag)

    return pathUtil.absolutePath(`posts?${searchParams.toString()}`)
  }

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

      <PostDetailContentSection
        onScroll={(e) => {
          const root: HTMLDivElement | null =
            document.querySelector<HTMLDivElement>('#__next')
          if (!root) return

          if (e.currentTarget.scrollTop > 100) {
            root.classList.add('shrink-headroom')
          } else {
            root.classList.remove('shrink-headroom')
          }
        }}
      >
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

        {post.thumbnailName ? (
          <StyledImg
            src={postUtil.getThumbnailSrc(post)}
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
        <TagSpreader tags={post.tags} linkBuilder={linkBuilder} />

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
  ) : (
    <></>
  )
}

export default PostDetail
