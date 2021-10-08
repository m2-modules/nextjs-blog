import { blogConfig } from '../config/blog.config'
import posts from '../config/post.config'
import { PathUtil } from './PathUtil'
import { PostUtil } from './PostUtil'

export const postUtil: PostUtil = new PostUtil(posts, './resources')
export const pathUtil: PathUtil = new PathUtil(blogConfig.siteURL)
