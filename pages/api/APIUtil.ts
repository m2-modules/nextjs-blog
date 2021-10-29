import fs from 'fs'
import marked from 'marked'
import path from 'path'

export class APIUtil {
  static publicPath: string = './public'

  static getMarkdownContent(mdFilePath: string): string {
    return marked(this.readFileSync(mdFilePath), { gfm: true })
  }

  static markedIt(content: string): string {
    return marked(content, { gfm: true })
  }

  static readFileSync(filePath: string): string {
    return fs.readFileSync(path.resolve(this.publicPath, filePath), 'utf8')
  }
}
