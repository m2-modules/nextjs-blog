import { SocialInfo } from '../components/SocialLinkBar'

export interface IBlogConfig {
  title: string
  titleDelimiter?: string
  lang?: string
  email?: string
  socials?: SocialInfo[]
  author?: string
}

export const blogConfig: IBlogConfig = {
  title: 'Code Logs',
  author: 'Author',
  socials: [
    { type: 'GitHub', url: 'https://github.com/possible819' },
    // { type: 'Facebook', url: 'https://your/Facebook/url' },
    // { type: 'Instagram', url: 'https://your/Instagram/url' },
    // { type: 'LinkedIn', url: 'https://your/LinkedIn/url' },
    // { type: 'Pinterest', url: 'https://your/Pinterest/url' },
    // { type: 'Reddit', url: 'https://your/Reddit/url' },
    // { type: 'Twitter', url: 'https://your/Twitter/url' },
    // { type: 'YouTube', url: 'https://your/YouTube/url' },
    // { type: 'GitHub', url: 'https://your/GitHub/url' },
  ],
}
