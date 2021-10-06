import { blogConfig } from './blog.config'

export interface ICopyrightConfig {
  message: string
  align: 'left' | 'center' | 'right'
}

export interface ILayoutFooterConfig {
  copyright?: ICopyrightConfig
}

export interface ILayoutConfig {
  footer?: ILayoutFooterConfig
}

export const layoutConfig: ILayoutConfig = {
  footer: {
    copyright: {
      message: `ⓒ 2021. ${blogConfig.author || ''} ${
        blogConfig.email ? `(${blogConfig.email})` : ''
      } ${blogConfig.author || blogConfig.email ? `all rights reserved.` : ''}`,
      align: 'center',
    },
  },
}
