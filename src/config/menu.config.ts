export interface IMenuConfig {
  path: string
  title: string
  description?: string
}

const menuConfigs: IMenuConfig[] = [
  { path: '/', title: 'Home', description: 'Home page description' },
  { path: '/posts', title: 'Post', description: 'Post list page description' },
  { path: '/about', title: 'About', description: 'About page description' },
]

export default menuConfigs
