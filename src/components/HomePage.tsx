import React from 'react'

import styled from 'styled-components'

import SlideCard from '@m2-modules/slide-card'

import { blogConfig } from '../config/blog.config'
import { IPost } from '../config/post.config'
import { postUtil } from '../utils'
import CategoryIndexer from './CategoryIndexer/CategoryIndexer'
import ContentSection from './ContentSection'
import PageHeading from './PageHeading'
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
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'recent' 'category' 'tag';

    & #recent-posts {
      width: 100vw;
    }
  }
`

const HomePage = (): JSX.Element => {
  const recentPosts: IPost[] = postUtil.getPosts(1, 5)

  return (
    <article className="v-flex flex-1 non-overflow">
      <PageHeading id="title" title={blogConfig.title} />

      <StyledSection>
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
          <h2>Tags</h2>
          <TagIndexer />
        </article>
      </StyledSection>
    </article>
  )
}

export default HomePage
