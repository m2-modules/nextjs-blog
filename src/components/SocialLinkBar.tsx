import styled from 'styled-components'

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
      return <Facebook name={'facebook-link-icon'} />
    case 'Instagram':
      return <Instagram name={'instagram-link-icon'} />
    case 'LinkedIn':
      return <LinkedIn name="linkedin-link-icon" />
    case 'Pinterest':
      return <Pinterest name="pinterest-link-icon" />
    case 'Reddit':
      return <Reddit name="reddit-link-icon" />
    case 'Twitter':
      return <Twitter name="reddit-link-icon" />
    case 'YouTube':
      return <YouTube name="youtube-link-icon" />
    case 'GitHub':
      return <GitHub name="github-link-icon" />
    default:
      return <></>
  }
}

const AnchorContainer = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
`
const StyledAnchor = styled.a`
  color: unset;
`

const SocialLinkBar = (props: SocialLinkBarProps): JSX.Element => {
  const socials: SocialInfo[] = props.socials

  return (
    <AnchorContainer id="social-link-bar">
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
