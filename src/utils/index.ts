import posts from '../config/post.config'
import { PostUtil } from './PostUtil'

export const postUtil: PostUtil = new PostUtil(posts, './resources')
