export type HeadMetaProps = {
  title: string
  description?: string
  keywords?: string[]
  author?: string
}

const HeadMeta = (props: HeadMetaProps): JSX.Element => {
  const title: string = props.title
  const description: string | undefined = props.description
  const keywords: string[] | undefined = props.keywords
  const author: string = props.author || ''

  return (
    <>
      <meta property="og:title" content={title} />
      {description ? (
        <>
          <meta property="og:description" content={description} />
          <meta name="description" content={description} />
        </>
      ) : (
        ''
      )}

      {keywords?.length ? (
        <meta name="keyword" content={keywords.join(', ')} />
      ) : (
        ''
      )}

      {author ? <meta name="author" content={author} /> : ''}
    </>
  )
}

export default HeadMeta
