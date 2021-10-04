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
    title: 'Sample Post 1',
    fileName: 'sample-1.md',
    description: 'Sample post 1 description',
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['Sample', 'Second Sample'],
  },
  {
    title: 'Sample Post 2',
    fileName: 'sample-2.md',
    description: 'Sample post 2 description',
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['Sample', 'Second Sample'],
  },
  {
    title: 'Sample Post 3',
    fileName: 'sample-3.md',
    description: 'Sample post 3 description',
    category: 'category-3',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['Sample', 'Second Sample'],
  },
  {
    title: 'Sample Post 4',
    fileName: 'sample-4.md',
    description: 'Sample post 4 description',
    category: 'category-4',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['Sample', 'Second Sample'],
  },
  {
    title: 'Sample Post 5',
    fileName: 'sample-5.md',
    description: 'Sample post 5 description',
    category: 'category-5',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['Sample', 'Second Sample'],
  },
  {
    title: 'Sample Post 6',
    fileName: 'sample-6.md',
    description: 'Sample post 6 description',
    category: 'category-6',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['Sample', 'Second Sample'],
  },
  {
    title: 'Sample Post 7',
    fileName: 'sample-7.md',
    description: 'Sample post 7 description',
    category: 'category-7',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['Sample', 'Second Sample'],
  },
  {
    title: 'Sample Post 8',
    fileName: 'sample-8.md',
    description: 'Sample post 8 description',
    category: 'category-8',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['Sample', 'Second Sample'],
  },
  {
    title: 'Sample Post 9',
    fileName: 'sample-9.md',
    description: 'Sample post 9 description',
    category: 'category-9',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['Sample', 'Second Sample'],
  },
  {
    title: 'Sample Post 10',
    fileName: 'sample-10.md',
    description: 'Sample post 10 description',
    category: 'category-10',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['Sample', 'Second Sample'],
  },
]

export default posts
