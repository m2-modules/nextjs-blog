export interface IPost {
  title: string
  fileName: string
  description: string
  category: string
  published: boolean
  publishedAt: string
  thumbnailName?: string
  tags: string[]
}

const posts: IPost[] = [
  {
    title: '검색엔진 최적화',
    fileName: 'meta-tag.md',
    description: '검색엔진 최적화를 위한 Meta Tag 설정',
    category: 'SEO',
    published: true,
    publishedAt: '2021-10-05',
    tags: ['SEO', 'Search Engine Optimization', '검색엔진 최적화', 'meta tag'],
    thumbnailName: 'seo-thumbnail.jpg',
  },
]

export default posts
