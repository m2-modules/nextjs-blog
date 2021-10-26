import React from 'react'

import type { NextPage } from 'next'

import CommonHead from '../src/components/CommonHead'
import Home from '../src/components/Home'
import PageHeading from '../src/components/PageHeading'
import { blogConfig } from '../src/config/blog.config'

const HomePage: NextPage = (): JSX.Element => {
  return (
    <>
      <CommonHead />

      <article className="v-flex flex-1 non-overflow">
        <PageHeading id="title" title={blogConfig.title} />
        <Home />
      </article>
    </>
  )
}

export default HomePage
