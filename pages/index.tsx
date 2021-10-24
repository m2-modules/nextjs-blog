import CommonHead from '../src/components/CommonHead'
import HomePage from '../src/components/HomePage'
import type { NextPage } from 'next'
import React from 'react'

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <CommonHead />
      <HomePage />
    </>
  )
}

export default Home
