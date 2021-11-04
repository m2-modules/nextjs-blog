const siteUrl = require('./package.json').siteURL || 'http://localhost'

if (!siteUrl) {
  console.warn(
    'There is no specified siteURL in `package.json` to create sitemap.xml'
  )
  console.warn('it will be generated based on `http://localhost` by default.')
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: './docs',
}
