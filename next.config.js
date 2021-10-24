const withTM = require('next-transpile-modules')([
  '@m2-modules/draw-panel',
  '@m2-modules/infinite-list',
  '@m2-modules/slide-card',
])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
})
