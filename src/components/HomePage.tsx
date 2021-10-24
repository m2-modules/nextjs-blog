import CategoryIndexer from './CategoryIndexer/CategoryIndexer'
import ContentSection from './ContentSection'
import { IPost } from '../config/post.config'
import PageHeading from './PageHeading'
import PostPreviewCard from './PostPreviewCard'
import React from 'react'
import SlideCard from '@m2-modules/slide-card'
import TagIndexer from './TagIndexer/TagIndexer'
import { blogConfig } from '../config/blog.config'
import { postUtil } from '../utils'
import styled from 'styled-components'

const StyledSection = styled(ContentSection)`
  flex: 1;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas: 'latest latest' 'category tag';
  grid-gap: 10px;
  overflow: auto;

  & #latest-posts {
    grid-area: latest;
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
    grid-template-areas: 'latest' 'category' 'tag';

    & #latest-posts {
      width: 100vw;
    }
  }
`

const HomePage = (): JSX.Element => {
  const latestPosts: IPost[] = postUtil.getPosts(1, 5)

  return (
    <article className="v-flex flex-1 non-overflow">
      <PageHeading id="title" title={blogConfig.title} />

      <StyledSection>
        <article id="latest-posts">
          <h2>Latest</h2>
          <SlideCard width={'inherit'} height={'inherit'} indicator={false}>
            {latestPosts.map((post: IPost) => (
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
