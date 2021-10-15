import { UtterancesProps } from '../components/Utterances'
import { blogConfig } from './blog.config'

export interface ICopyrightConfig {
  message: string
  align: 'left' | 'center' | 'right'
}

export interface ILayoutFooterConfig {
  copyright?: ICopyrightConfig
}

export interface ILayoutConfig {
  postDetail?: {
    utterances?: UtterancesProps
  }
  footer?: ILayoutFooterConfig
}

export const layoutConfig: ILayoutConfig = {
  postDetail: {
    utterances: {
      repo: 'your_git/repository',
      issueTerm: 'pathname',
      issueLabel: 'comment',
      theme: 'preferred-color-scheme',
    },
  },
  footer: {
    copyright: {
      message: `ⓒ 2021. ${blogConfig.author || ''} ${
        blogConfig.email ? `(${blogConfig.email})` : ''
      } ${blogConfig.author || blogConfig.email ? `all rights reserved.` : ''}`,
      align: 'center',
    },
  },
}
