import { IPost } from '../config/post.config'
import marked from 'marked'
import path from 'path'

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

  getPosts(page: number, limit = 10, includeNonPublished = false): IPost[] {
    const offset: number = (page - 1) * limit

    if (includeNonPublished) {
      return this.posts.slice(offset, offset + limit)
    } else {
      return this.publishedPosts.slice(offset, offset + limit)
    }
  }

  getPostByTitle(title: string): IPost {
    const found: IPost | undefined = this.posts.find(
      (post: IPost) => post.title === title || this.dashedTitle(post) === title
    )
    if (!found) throw new Error('Failed to find post by title')

    return found
  }

  getThumbnailSrc(post: IPost): string {
    return this.buildThumbnailPath(post)
  }

  async getRawContent(post: IPost): Promise<string> {
    const response: Response = await fetch(this.buildContentPath(post))

    if (!response.ok) throw new Error(await response.text())

    return await response.text()
  }

  async getContent(post: IPost): Promise<string> {
    return marked(await this.getRawContent(post))
  }

  private buildContentPath(post: IPost): string {
    const url: URL = new URL(window.origin)
    url.pathname = path.join(this.rootPath, post.category, post.fileName)
    return url.href
  }

  private buildThumbnailPath(post: IPost): string {
    if (!post.thumbnailName) throw new Error('No specified thumbnail')

    return '/' + path.join(this.rootPath, 'assets', post.thumbnailName)
  }

  dashedTitle(post: IPost): string {
    return post.title.replace(/ /g, '-').toLowerCase()
  }
}
