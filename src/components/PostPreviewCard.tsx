import { IPost } from '../config/post.config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TagSpreader from './TagSpreader'
import { postUtil } from '../utils'
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
  grid-template-rows: auto 1fr;
  grid-template-areas: ${(props) =>
    props.hasThumbnail
      ? `
      'title title date tags'
      'thumbnail description description description'
    `
      : `
      'title title date tags'
      'description description description description'
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
        'title title'
        'date date'
        'tags tags'
        'thumbnail thumbnail'
        'description description'
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

export interface PostPreviewCardProps extends React.HTMLProps<HTMLElement> {
  post: IPost
}

const PostPreviewCard = (props: PostPreviewCardProps): JSX.Element => {
  const post: IPost = props.post

  return (
    <Link href={`/posts/${postUtil.dashedTitle(post)}`} passHref>
      <StyledArticle hasThumbnail={Boolean(post.thumbnailName)}>
        <h2 id="title">{post.title}</h2>
        <p id="date">{post.publishedAt.toLocaleDateString()}</p>
        <TagSpreader tags={post.tags} />
        {post.thumbnailName ? (
          <Image
            id="thumbnail"
            src={postUtil.getThumbnailSrc(post)}
            alt={post.title}
          />
        ) : (
          ''
        )}
        <p id="description">{post.description}</p>
      </StyledArticle>
    </Link>
  )
}

export default PostPreviewCard
