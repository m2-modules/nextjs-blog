const siteUrl = require('./package.json').siteURL

if (!siteUrl) throw new Error('There is no specified site URL in package.json')

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: './docs',
}
