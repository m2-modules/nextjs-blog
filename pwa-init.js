'use strict'

const fs = require('fs')
const name = require('./package.json').name

if (!name) throw new Error('Application name is not provided.')

const capitalizedName = name
  .replace(/\-|_/g, ' ')
  .split(' ')
  .map((word) => {
    return word
      .split('')
      .map((char, idx) => {
        if (idx === 0) return char.toUpperCase()
        return char
      })
      .join('')
  })
  .join(' ')
const shortenName = capitalizedName.replace(/ /g, '')

const manifest = {
  name: capitalizedName,
  short_name: shortenName,
  scope: '/',
  start_url: '/',
  display: 'standalone',
  orientation: 'any',
  background_color: '#ffffff',
  theme_color: '#ffffff',
  icons: [
    {
      src: '/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/icons/icon-256x256.png',
      sizes: '256x256',
      type: 'image/png',
    },
    {
      src: '/icons/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
    },
    {
      src: '/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
  screenshots: [
    // {
    //   src: '/assets/screenshots/screen1.png',
    //   sizes: '2880x1800',
    //   type: 'image/png',
    //   description: 'PWABuilder Home Screen',
    // },
    // {
    //   src: '/assets/screenshots/screen2.png',
    //   sizes: '2880/1800',
    //   type: 'image/png',
    //   description: 'PWABuilder Report Card',
    // },
    // {
    //   src: '/assets/screenshots/screen3.png',
    //   sizes: '2880x1800',
    //   type: 'image/png',
    //   description: 'Manifest information on the Report Card',
    // },
    // {
    //   src: '/assets/screenshots/screen4.png',
    //   sizes: '2880x1800',
    //   type: 'image/png',
    //   description: 'Pick a pre-built Service Worker',
    // },
    // {
    //   src: '/assets/screenshots/screen5.png',
    //   sizes: '2880x1800',
    //   type: 'image/png',
    //   description: 'Publish your PWA to the App Stores!',
    // },
    // {
    //   src: '/assets/screenshots/mobile.png',
    //   sizes: '1439x2881',
    //   type: 'image/png',
    //   description: 'PWABuilder also works on your phone!',
    // },
  ],
  categories: [
    // "books"
    // "business"
    // "education"
    // "entertainment"
    // "finance"
    // "fitness"
    // "food"
    // "games"
    // "government"
    // "health"
    // "kids"
    // "lifestyle"
    // "magazines"
    // "medical"
    // "music"
    // "navigation"
    // "news"
    // "personalization"
    // "photo"
    // "politics"
    // "productivity"
    // "security"
    // "shopping"
    'social',
    // "sports"
    // "travel"
    // "utilities"
    // "weather"
  ],
}

fs.writeFileSync('./public/manifest.json', JSON.stringify(manifest, null, 2))
