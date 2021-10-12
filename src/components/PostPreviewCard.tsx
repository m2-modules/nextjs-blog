import { pathUtil, postUtil } from '../utils'

import { IPost } from '../config/post.config'
import React from 'react'
import TagSpreader from './TagSpreader'
import styled from 'styled-components'

interface IStyledArticle {
  hasThumbnail: boolean
}

const StyledArticle = styled.article<IStyledArticle>`
  box-shadow: 2px 2px 2px #aaa;
  border-radius: 5px;
  border: 1px solid #eee;
  margin: 20px;
  padding: 20px;
  cursor: pointer;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr auto auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: ${(props) =>
    props.hasThumbnail
      ? `
      'thumbnail title title date'
      'thumbnail description description description'
      'thumbnail tags tags tags'
    `
      : `
      'title title title date'
      'description description description description'
      'tags tags tags tags'
    `};

  & > #title {
    grid-area: title;
    margin: auto 0px;
  }
  & > #date {
    grid-area: date;
    margin: auto;
  }
  & > ul {
    grid-area: tags;
  }
  & > #thumbnail {
    grid-area: thumbnail;
  }
  & > #description {
    grid-area: description;
  }

  @media only screen and (max-width: 800px) {
    & {
      grid-template-columns: 1fr auto;
      grid-template-rows: auto auto auto 1fr auto;
      grid-template-areas: ${(props) =>
        props.hasThumbnail
          ? `
        'thumbnail thumbnail'
        'title date'
        'description description'
        'tags tags'
      `
          : `
        'title title'
        'date date'
        'tags tags'
        'description description'
        'description description'
      `};
    }
    & > #date {
      grid-area: date;
      margin: auto 0px auto auto;
    }
  }
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
    <a href={pathUtil.absolutePath(`/posts/${postUtil.dashedTitle(post)}`)}>
      <StyledArticle hasThumbnail={Boolean(post.thumbnailName)}>
        <h2 id="title">{post.title}</h2>
        <p id="date">{new Date(post.publishedAt).toLocaleDateString()}</p>
        <TagSpreader tags={post.tags} />
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
      </StyledArticle>
    </a>
  )
}

export default PostPreviewCard
