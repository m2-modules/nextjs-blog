import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Pinterest,
  Reddit,
  Twitter,
  YouTube,
} from '@material-ui/icons'

import styled from 'styled-components'

type SupportingSocials =
  | 'Facebook'
  | 'Instagram'
  | 'LinkedIn'
  | 'Pinterest'
  | 'Reddit'
  | 'Twitter'
  | 'YouTube'
  | 'GitHub'

export type SocialInfo = {
  type: SupportingSocials
  url: string
}

type SocialLinkBarProps = {
  socials: SocialInfo[]
}

function renderSocialIcon(type: SupportingSocials): JSX.Element {
  switch (type) {
    case 'Facebook':
      return <Facebook />
    case 'Instagram':
      return <Instagram />
    case 'LinkedIn':
      return <LinkedIn />
    case 'Pinterest':
      return <Pinterest />
    case 'Reddit':
      return <Reddit />
    case 'Twitter':
      return <Twitter />
    case 'YouTube':
      return <YouTube />
    case 'GitHub':
      return <GitHub />
    default:
      return <></>
  }
}

const AnchorContainer = styled.div`
  display: flex;
  gap: 10px;
`
const StyledAnchor = styled.a`
  color: unset;
`

const SocialLinkBar = (props: SocialLinkBarProps): JSX.Element => {
  const socials: SocialInfo[] = props.socials

  return (
    <AnchorContainer>
      {socials.map(({ type, url }: SocialInfo, idx: number) => {
        return (
          <StyledAnchor
            key={`social-link-${idx}`}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {renderSocialIcon(type)}
          </StyledAnchor>
        )
      })}
    </AnchorContainer>
  )
}

export default SocialLinkBar
