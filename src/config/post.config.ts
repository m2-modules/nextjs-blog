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
  {
    title: `Sample title 1-1`,
    fileName: `sample-1.md`,
    description: `Sample description 1`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
    references: [{
      title: 'Naver',
      url: 'https://naver.com'
    }, {
      title: 'Google',
      url: 'https://google.com'
    }]
  },
  {
    title: `Sample title 1-2`,
    fileName: `sample-2.md`,
    description: `Sample description 2`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-3`,
    fileName: `sample-3.md`,
    description: `Sample description 3`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-4`,
    fileName: `sample-4.md`,
    description: `Sample description 4`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-5`,
    fileName: `sample-5.md`,
    description: `Sample description 5`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-6`,
    fileName: `sample-6.md`,
    description: `Sample description 6`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-7`,
    fileName: `sample-7.md`,
    description: `Sample description 7`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-8`,
    fileName: `sample-8.md`,
    description: `Sample description 8`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: Array(50)
      .fill('')
      .map((_, idx) => `Sample ${idx + 1}`),
  },
  {
    title: `Sample title 1-9`,
    fileName: `sample-9.md`,
    description: `Sample description 9`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample', 'Sample 2'],
  },
  {
    title: `Sample title 1-10`,
    fileName: `sample-10.md`,
    description: `Sample description 10`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-11`,
    fileName: `sample-11.md`,
    description: `Sample description 11`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-12`,
    fileName: `sample-12.md`,
    description: `Sample description 12`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-13`,
    fileName: `sample-13.md`,
    description: `Sample description 13`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-14`,
    fileName: `sample-14.md`,
    description: `Sample description 14`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-15`,
    fileName: `sample-15.md`,
    description: `Sample description 15`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-16`,
    fileName: `sample-16.md`,
    description: `Sample description 16`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-17`,
    fileName: `sample-17.md`,
    description: `Sample description 17`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-18`,
    fileName: `sample-18.md`,
    description: `Sample description 18`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 1-19`,
    fileName: `sample-19.md`,
    description: `Sample description 19`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample', 'Sample 2'],
  },
  {
    title: `Sample title 1-20`,
    fileName: `sample-20.md`,
    description: `Sample description 20`,
    category: 'category-1',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-1`,
    fileName: `sample-1.md`,
    description: `Sample description 1`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-2`,
    fileName: `sample-2.md`,
    description: `Sample description 2`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-3`,
    fileName: `sample-3.md`,
    description: `Sample description 3`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-4`,
    fileName: `sample-4.md`,
    description: `Sample description 4`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-5`,
    fileName: `sample-5.md`,
    description: `Sample description 5`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-6`,
    fileName: `sample-6.md`,
    description: `Sample description 6`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-7`,
    fileName: `sample-7.md`,
    description: `Sample description 7`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-8`,
    fileName: `sample-8.md`,
    description: `Sample description 8`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-9`,
    fileName: `sample-9.md`,
    description: `Sample description 9`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-10`,
    fileName: `sample-10.md`,
    description: `Sample description 10`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-11`,
    fileName: `sample-11.md`,
    description: `Sample description 11`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-12`,
    fileName: `sample-12.md`,
    description: `Sample description 12`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-13`,
    fileName: `sample-13.md`,
    description: `Sample description 13`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-14`,
    fileName: `sample-14.md`,
    description: `Sample description 14`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-15`,
    fileName: `sample-15.md`,
    description: `Sample description 15`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-16`,
    fileName: `sample-16.md`,
    description: `Sample description 16`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-17`,
    fileName: `sample-17.md`,
    description: `Sample description 17`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-18`,
    fileName: `sample-18.md`,
    description: `Sample description 18`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-19`,
    fileName: `sample-19.md`,
    description: `Sample description 19`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
  {
    title: `Sample title 2-20`,
    fileName: `sample-20.md`,
    description: `Sample description 20`,
    category: 'category-2',
    published: true,
    publishedAt: '2021-01-01',
    tags: ['sample'],
  },
]

export default posts
