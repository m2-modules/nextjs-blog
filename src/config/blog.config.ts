import { SocialInfo } from '../components/SocialLinkBar'

export interface IBlogConfig {
  title: string
  titleDelimiter?: string
  lang?: string
  email?: string
  socials?: SocialInfo[]
}

export const blogConfig: IBlogConfig = {
  title: 'My Blog',
  socials: [
    { type: 'GitHub', url: 'https://github.com/your_account' },
    { type: 'Facebook', url: 'https://your/Facebook/url' },
    { type: 'Instagram', url: 'https://your/Instagram/url' },
    // { type: 'LinkedIn', url: 'https://your/LinkedIn/url' },
    // { type: 'Pinterest', url: 'https://your/Pinterest/url' },
    // { type: 'Reddit', url: 'https://your/Reddit/url' },
    // { type: 'Twitter', url: 'https://your/Twitter/url' },
    // { type: 'YouTube', url: 'https://your/YouTube/url' },
    // { type: 'GitHub', url: 'https://your/GitHub/url' },
  ],
}
