type UtterancesIssueTerms = 'pathname' | 'url' | 'title' | 'og:title'

type UtterancesThemes =
  | 'github-light'
  | 'github-dark'
  | 'preferred-color-scheme'
  | 'github-dark-orange'
  | 'icy-dark'
  | 'dark-blue'
  | 'photon-dark'
  | 'boxy-light'

export interface UtterancesProps {
  repo: string
  issueTerm: UtterancesIssueTerms
  theme: UtterancesThemes
  issueLabel?: string
}

const Utterances = (props: UtterancesProps): JSX.Element => {
  const repo: string = props.repo
  const issueTerm: UtterancesIssueTerms = props.issueTerm
  const theme: UtterancesThemes = props.theme
  const issueLabel: string | undefined = props.issueLabel

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <script src="https://utteranc.es/client.js"
            repo="${repo}"
            issue-term="${issueTerm}"
            ${issueLabel ? `label="${issueLabel}"` : ''}
            theme="${theme}"
            crossorigin="anonymous"
            async>
          </script>
        `,
      }}
    ></div>
  )
}

export default Utterances
