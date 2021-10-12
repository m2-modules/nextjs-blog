import React from 'react'

import type { NextPage } from 'next'

import CommonHead from '../src/components/CommonHead'

const Offline: NextPage = (): JSX.Element => {
  return (
    <>
      <CommonHead />
      <h1>Missing network connection!</h1>
      <p>Please check your network connection and retry</p>
    </>
  )
}

export default Offline
