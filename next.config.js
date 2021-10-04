const withTM = require('next-transpile-modules')([
  '@m2-modules/infinite-list',
  '@m2-modules/draw-panel',
])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  images: { loader: 'custom' },
})
