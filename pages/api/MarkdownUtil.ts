import fs from 'fs'
import marked from 'marked'
import path from 'path'

export class MarkdownUtil {
  static readonly publicPath: string = './public'

  static getMarkdownContent(mdFilePath: string): string {
    return marked(this.readFileSync(mdFilePath))
  }

  static readFileSync(filePath: string): string {
    return fs.readFileSync(path.resolve(this.publicPath, filePath), 'utf8')
  }
}
