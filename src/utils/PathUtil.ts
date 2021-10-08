export class PathUtil {
  private siteURL: string

  constructor(siteURL: string) {
    this.siteURL = siteURL
  }

  public absolutePath(path: string, baseURL?: string): string {
    path = path.replace(/^\//, '')
    return [baseURL || this.siteURL, path].join('/')
  }
}
