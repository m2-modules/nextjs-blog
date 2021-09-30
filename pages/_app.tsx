import '../src/assets/styles/globals.css'
import '../src/assets/styles/layout.css'

import type { AppProps } from 'next/app'
import PageLayout from '../src/components/PageLayout'
import React from 'react'

const MainApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <PageLayout component={<Component {...pageProps} />} />
}

export default MainApp
