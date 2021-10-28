import React from 'react'

import styled from 'styled-components'

import { IPost } from '../config/post.config'
import { pathUtil, postUtil } from '../utils'
import { DateUtil } from '../utils/DateUtil'
import TagSpreader from './TagSpreader'

interface IStyledAnchor {
  hasThumbnail: boolean
}

const StyledAnchor = styled.a<IStyledAnchor>`
  flex: 1;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr auto auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: ${(props) =>
    props.hasThumbnail
      ? `
      'thumbnail title title date'
      'thumbnail description description description'
    `
      : `
      'title title title date'
      'description description description description'
    `};

  & #title {
    grid-area: title;
    margin: auto 0px;
  }
  & #date {
    color: #666;
    font-size: 0.8rem;
    grid-area: date;
    margin: auto;
  }
  & #thumbnail {
    grid-area: thumbnail;
  }
  & #description {
    grid-area: description;
  }

  @media only screen and (max-width: 800px) {
    & {
      grid-template-columns: 1fr auto;
      grid-template-areas: ${(props) =>
        props.hasThumbnail
          ? `
        'thumbnail thumbnail'
        'title date'
        'description description'
        'tags tags'
      `
          : `
        'title date'
        'description description'
        'tags tags'
      `};
    }
    & #date {
      grid-area: date;
      margin: auto 0px auto auto;
    }
  }
`

const StyledArticle = styled.article`
  border-bottom: 1px solid #eee;
  padding: 20px;
  min-height: 240px;

  display: flex;
  flex-direction: column;
`

const StyledImg = styled.img`
  width: -webkit-fill-available;
  margin: auto;
  border-radius: 10px;
  max-width: 20vw;

  @media only screen and (max-width: 800px) {
    & {
      max-width: none;
    }
  }
`

export interface PostPreviewCardProps extends React.HTMLProps<HTMLElement> {
  post: IPost
}

const PostPreviewCard = (props: PostPreviewCardProps): JSX.Element => {
  const post: IPost = props.post

  return (
    <StyledArticle>
      <StyledAnchor
        hasThumbnail={Boolean(post.thumbnailName)}
        href={pathUtil.absolutePath(`/posts/${postUtil.dashedTitle(post)}`)}
      >
        <h2 id="title">{post.title}</h2>

        <p id="date">{DateUtil.formatReadable(post.publishedAt)}</p>

        {post.thumbnailName ? (
          <StyledImg
            id="thumbnail"
            src={postUtil.getThumbnailSrc(post)}
            alt={post.title}
          />
        ) : (
          ''
        )}
        <p style={{ margin: 0 }} id="description">
          {post.description}
        </p>
      </StyledAnchor>

      <TagSpreader tags={post.tags} />
    </StyledArticle>
  )
}

export default PostPreviewCard
