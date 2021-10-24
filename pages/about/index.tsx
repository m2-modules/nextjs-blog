import CommonHead from '../../src/components/CommonHead'
import { NextPage } from 'next'
import PageHeading from '../../src/components/PageHeading'
import React from 'react'

const About: NextPage = (): JSX.Element => {
  return (
    <article>
      <CommonHead />
      <PageHeading title="About" />
    </article>
  )
}

export default About
