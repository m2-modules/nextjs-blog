import React, { RefObject, useRef } from 'react'

import styled from 'styled-components'

import SlideCard from '@m2-modules/slide-card'

import { IPost } from '../config/post.config'
import useHeadroomShrink from '../hooks/use-headroom-shrink'
import { pathUtil, postUtil } from '../utils'
import CategoryIndexer from './CategoryIndexer/CategoryIndexer'
import ContentSection from './ContentSection'
import PostPreviewCard from './PostPreviewCard'
import TagIndexer from './TagIndexer/TagIndexer'

const StyledSection = styled(ContentSection)`
  flex: 1;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas: 'recent recent' 'category tag';
  grid-gap: 10px;
  overflow: auto;

  & #recent-posts {
    grid-area: recent;
    width: 60vw;

    & > h2 {
      font-size: 1rem;
      margin: 10px 20px;
    }
  }

  & #category-indexer {
    grid-area: category;

    & > h2 {
      font-size: 1rem;
      margin: 10px 20px;
    }
  }

  & #tag-indexer {
    grid-area: tag;

    & > h2 {
      font-size: 1rem;
      margin: 10px 20px;
    }

    & .more-tags {
      float: right;
      color: #666;
      font-size: 0.8rem;
      font-weight: lighter;
    }
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'recent' 'category' 'tag';

    & #recent-posts {
      width: 100vw;
    }
  }
`

const Home = (): JSX.Element => {
  const containerRef: RefObject<HTMLElement> = useRef<HTMLElement>(null)
  useHeadroomShrink(containerRef)
  const recentPosts: IPost[] = postUtil.getPosts(1, 5)

  return (
    <StyledSection ref={containerRef}>
      <article id="recent-posts">
        <h2>Recent posts</h2>
        <SlideCard width={'inherit'} height={'inherit'} indicator={false}>
          {recentPosts.map((post: IPost) => (
            <PostPreviewCard key={post.title} post={post} />
          ))}
        </SlideCard>
      </article>

      <article id="category-indexer" className="v-flex flex-1">
        <h2>Categories</h2>
        <CategoryIndexer />
      </article>

      <article id="tag-indexer" className="v-flex flex-1">
        <h2>
          Tags
          <a className="more-tags" href={pathUtil.absolutePath('/tags')}>
            See more
          </a>
        </h2>
        <TagIndexer />
      </article>
    </StyledSection>
  )
}

export default Home
