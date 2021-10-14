/**
 * @jest-environment jsdom
 */

import * as fs from 'fs'
import * as path from 'path'

import { pathUtil, postUtil } from '../src/utils'
import posts, { IPost } from '../src/config/post.config'

import { blogConfig } from '../src/config/blog.config'
import marked from 'marked'
import { organizeHeadings } from '../src/components/ContentIndexer/Heading'

describe(`Document validity test`, () => {
  test(`Document shouldn't have same title`, () => {
    const postTitles: Set<string> = new Set<string>(
      posts.map((post: IPost) => post.title)
    )
    expect(postTitles.size).toEqual(posts.length)
  })

  test(`Markdown files should exist`, () => {
    const isMarkdownExists: boolean = posts.every((post: IPost) => {
      const markdownPath: string = path.resolve(
        __dirname,
        `../public/resources/${post.category}/${post.fileName}`
      )
      return fs.existsSync(markdownPath)
    })

    expect(isMarkdownExists).toEqual(true)
  })

  test(`Thumbnail files should exist`, () => {
    const isThumbnailExists: boolean = posts.every((post: IPost) => {
      if (!post.thumbnailName) return true
      const markdownPath: string = path.resolve(
        __dirname,
        `../public/resources/assets/${post.thumbnailName}`
      )
      return fs.existsSync(markdownPath)
    })

    expect(isThumbnailExists).toEqual(true)
  })

  test(`Every post should have right URL pattern of title`, () => {
    const hasRightPattern: boolean = posts.every((post: IPost) => {
      const dashedTitle: string = postUtil.dashedTitle(post)
      return dashedTitle.indexOf('&') < 0 && dashedTitle.indexOf('?') < 0
    })

    expect(hasRightPattern).toEqual(true)
  })

  test(`Every post should have its description`, () => {
    const hasDescription: boolean = posts.every(
      (post: IPost) => post.description
    )

    expect(hasDescription).toEqual(true)
  })

  test(`Every post should have at least one tag`, () => {
    const isPostHasTag: boolean = posts.every(
      (post: IPost) => post.tags.length >= 1
    )

    expect(isPostHasTag).toEqual(true)
  })

  test(`Every post has right structure of heading elements`, async () => {
    let validFlag: boolean = true

    for (let i = 0; i < posts.length; i++) {
      const post: IPost = posts[i]
      try {
        const content: string = marked(
          fs.readFileSync(
            path.resolve(
              __dirname,
              `../public/resources/${post.category}/${post.fileName}`
            ),
            'utf8'
          )
        )

        organizeHeadings(content)
      } catch (e) {
        validFlag = false
        console.log(`Invalid structure of heading is found in ${post.fileName}`)
        throw e
      }
    }

    expect(validFlag).toEqual(true)
  })
})
