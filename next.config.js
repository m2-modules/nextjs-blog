const withTM = require('next-transpile-modules')(['@m2-modules/draw-panel'])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
})
