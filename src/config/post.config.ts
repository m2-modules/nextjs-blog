export interface IReference {
  title: string
  url: string
}

export interface IPost {
  title: string
  fileName: string
  description: string
  category: string
  published: boolean
  publishedAt: string
  thumbnailName?: string
  tags: string[]
  references?: IReference[]
}

const posts: IPost[] = [
  // {
  //   title: `Sample title 2-20`,
  //   fileName: `sample-20.md`,
  //   description: `Sample description 20`,
  //   category: 'category-2',
  //   published: true,
  //   publishedAt: '2021-01-01',
  //   tags: ['sample'],
  // },
]

export default posts
