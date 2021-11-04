import React from 'react'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import CommonHead from '../../src/components/CommonHead'
import PostDetail from '../../src/components/PostDetail'
import posts, { IPost } from '../../src/config/post.config'
import { postUtil } from '../../src/utils'
import { MarkdownUtil } from '../api/MarkdownUtil'

export type PostDetailPageProps = {
  post: IPost
  content: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const title: string = context.params?.title as string
    const post: IPost = postUtil.getPostByTitle(title)
    const mdFilePath: string = postUtil.getMarkdownPath(post)
    const content: string = MarkdownUtil.getMarkdownContent(mdFilePath)

    return {
      props: {
        post,
        content,
      },
    }
  } catch (e) {
    console.log(e)
    return {
      notFound: true,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.map((post: IPost) => ({
      params: { title: postUtil.dashedTitle(post) },
    })),
    fallback: false,
  }
}

const PostDetailPage: NextPage<PostDetailPageProps> = ({
  post,
  content,
}: PostDetailPageProps): JSX.Element => (
  <>
    <CommonHead
      title={post.title}
      description={post.description}
      keywords={[post.category, ...post.tags]}
    />
    <PostDetail post={post} content={content} />
  </>
)

export default PostDetailPage
