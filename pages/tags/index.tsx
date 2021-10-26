import React from 'react'

import { NextPage } from 'next'

import CommonHead from '../../src/components/CommonHead'
import PageHeading from '../../src/components/PageHeading'
import TagList from '../../src/components/TagList'
import { postUtil } from '../../src/utils'

const TagListPage: NextPage = (): JSX.Element => (
  <>
    <CommonHead />

    <article className="v-flex flex-1 non-overflow">
      <PageHeading
        id="title"
        title="Tags"
        subMessage={`(${Object.keys(postUtil.tagsWithCount()).length})`}
      />
      <TagList />
    </article>
  </>
)

export default TagListPage
