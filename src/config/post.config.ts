export interface IPost {
  title: string
  fileName: string
  description: string
  category: string
  published: boolean
  publishedAt: Date
  thumbnailName?: string
  tags: string[]
}

const posts: IPost[] = [
  {
    title: 'Sample Post 1',
    fileName: 'sample-1.md',
    description: 'Sample post 1 description',
    category: 'category-1',
    published: true,
    publishedAt: new Date(),
    tags: ['Sample', 'Second Sample'],
  },
  {
    title: 'Sample Post 2',
    fileName: 'sample-2.md',
    description: 'Sample post 2 description',
    category: 'category-2',
    published: true,
    publishedAt: new Date(),
    tags: ['Sample', 'Second Sample'],
  },
  {
    title: 'Sample Post 3',
    fileName: 'sample-3.md',
    description: 'Sample post 3 description',
    category: 'category-3',
    published: true,
    publishedAt: new Date(),
    tags: ['Sample', 'Second Sample'],
  },
]

export default posts
