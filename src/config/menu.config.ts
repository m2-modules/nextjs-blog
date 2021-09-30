export interface IMenuConfig {
  path: string
  title: string
}

const menuConfigs: IMenuConfig[] = [
  { path: '/', title: 'Home' },
  { path: '/posts', title: 'Post' },
  { path: '/about', title: 'About' },
]

export default menuConfigs
