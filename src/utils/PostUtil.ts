import path from 'path'

import { IPost } from '../config/post.config'
import { DateUtil } from './DateUtil'

export interface CategoriesWithStatus {
  [categoryName: string]: {
    count: number
    hasNew: boolean
  }
}

export interface TagsWithCount {
  [tagName: string]: number
}
export class PostUtil {
  private readonly posts: IPost[]
  private readonly publishedPosts: IPost[]
  private readonly rootPath: string

  constructor(posts: IPost[], rootPath: string) {
    posts.sort(
      (a: IPost, b: IPost) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )

    this.posts = posts
    this.publishedPosts = this.posts.filter((post: IPost) => post.published)
    this.rootPath = rootPath
  }

  getPosts(
    page: number,
    limit = 10,
    query?: string | null,
    category?: string
  ): IPost[] {
    let posts: IPost[] = this.getPostAll()
    if (category)
      posts = posts.filter(
        (post: IPost) => post.category.replace(/-/g, ' ') === category
      )

    if (query) {
      const generalizedQuery: string = this.generalize(query)
      posts = posts.filter(
        (post: IPost) => this.getMeta(post).indexOf(generalizedQuery) >= 0
      )
    }

    if (limit === 0) {
      return posts
    } else {
      const offset: number = (page - 1) * limit
      return posts.slice(offset, offset + limit)
    }
  }

  getPostAll(): IPost[] {
    return this.publishedPosts.slice(0)
  }

  getPostByTitle(title: string): IPost {
    const found: IPost | undefined = this.posts.find(
      (post: IPost) => post.title === title || this.dashedTitle(post) === title
    )
    if (!found) throw new Error('Failed to find post by title')

    return found
  }

  hasPosts(
    page: number,
    limit?: number,
    query?: string | null,
    category?: string
  ): boolean {
    return Boolean(this.getPosts(page, limit, query, category).length)
  }

  getMarkdownPath(post: IPost): string {
    return path.join(this.rootPath, post.category, post.fileName)
  }

  getThumbnailPath(post: IPost): string {
    if (!post.thumbnailName) throw new Error('No specified thumbnail')

    return path.join('/', this.rootPath, 'assets', post.thumbnailName)
  }

  dashedTitle(post: IPost): string {
    return post.title.replace(/ /g, '-').toLowerCase()
  }

  getMeta(post: IPost): string {
    return this.generalize(
      `${post.title}${post.description}${post.tags.join()}`
    )
  }

  generalize(text: string): string {
    return text.replace(/ /g, '').toLocaleLowerCase()
  }

  categoriesWithStatus(): CategoriesWithStatus {
    return this.getPostAll().reduce(
      (categoriesWithCount: CategoriesWithStatus, post: IPost) => {
        const category: string = post.category.replace(/-/g, ' ')

        if (categoriesWithCount[category]) {
          categoriesWithCount[category].count++
        } else {
          categoriesWithCount[category] = {
            count: 1,
            hasNew: this.hasNewByCategory(category),
          }
        }

        return categoriesWithCount
      },
      {}
    )
  }

  tagsWithCount(): TagsWithCount {
    return this.getPostAll().reduce(
      (tagsWithCount: TagsWithCount, post: IPost) => {
        const tags: string[] = post.tags

        tags.forEach((tag: string) => {
          if (tagsWithCount[tag]) {
            tagsWithCount[tag]++
          } else {
            tagsWithCount[tag] = 1
          }
        })

        return tagsWithCount
      },
      {}
    )
  }

  getCountByCategory(category: string): number {
    return (
      this.getPostAll().filter(
        (post: IPost) => post.category.replace(/-/g, ' ') === category
      ).length || 0
    )
  }

  hasNewByCategory(category: string): boolean {
    return this.getPosts(1, 0, null, category).some((post: IPost) => {
      const aWeekAgo: Date = DateUtil.daysBefore(3)
      return new Date(post.publishedAt) >= aWeekAgo
    })
  }
}
