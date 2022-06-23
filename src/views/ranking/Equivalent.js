import React, { useContext } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import useIframe from 'hooks/useIframe'
import { formatName } from 'utils/formatters'
import DataContext from 'utils/DataContext'
import Emoji from 'components/base/Emoji'
import MagicLink from 'components/base/MagicLink'

const Wrapper = styled(MagicLink)`
  position: relative;
  width: calc(25% - 1.125rem);
  text-decoration: none;

  ${(props) => props.theme.mq.medium} {
    width: calc(33.3333% - 0.5rem);
  }
  ${(props) => props.theme.mq.small} {
    width: calc(50% - 0.375rem);
  }
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(228, 237, 246, 0.6);
    border: 0.0625rem solid rgba(228, 237, 246, 0.2);
    border-radius: 1rem;
    backdrop-filter: blur(0.375rem);
    transition: background 300ms;
  }

  &:hover {
    &:before {
      background: ${(props) => props.theme.colors.second};
    }
  }
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.125rem 0.5rem;
`
const EmojiWrapper = styled.div`
  margin-bottom: 0.5rem;
  font-size: 2rem;

  img,
  span {
    display: block;
  }
`
const Title = styled.p`
  margin-bottom: 0.25rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.text};
  text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.15);
`
const Name = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 3rem;
`
const Subtitle = styled.span`
  display: block;
  font-weight: 300;
  font-size: 0.75rem;
`
const StyledMagicLink = styled.p`
  margin: 0 auto;
  font-size: 0.8125rem;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;

  svg {
    display: block;
    height: 0.75rem;
    width: auto;
  }
`
const Svg = styled.svg`
  width: 1em;
  height: auto;
`
export default function Equivalent(props) {
  const { categories } = useContext(DataContext)
  const category = categories.find(
    (category) => category.id === props.equivalent.category
  )

  const iframe = useIframe()
  let location = useLocation()

  return (
    <Wrapper
      background={props.background}
      to={`${iframe ? location.origin : ''}/categories/${category?.slug}/${
        props.equivalent.slug
      }`}
    >
      <Content>
        <EmojiWrapper>
          <Emoji>{props.equivalent.emoji}</Emoji>
        </EmojiWrapper>
        <Title>
          <Name>
            {!props.equivalent.scenario &&
              (category?.multiplier === 1 ? 'Un' : category?.multiplier)}{' '}
            {formatName(
              props.equivalent.name.fr,
              category?.multiplier,
              props.equivalent.scenario
            )}
            {props.equivalent.subtitle ? (
              <Subtitle>
                {formatName(
                  props.equivalent.subtitle.fr,
                  categories.multiplier
                )}
              </Subtitle>
            ) : (
              ''
            )}
          </Name>
        </Title>
        <StyledMagicLink>
          Voir le détail
          {iframe && (
            <Svg x='0px' y='0px' viewBox='0 0 283.178 283.178'>
              <path
                d='M254.812,140.713h-20c-4.142,0-7.5,3.358-7.5,7.5v91.186c0,4.84-3.939,8.778-8.779,8.778H43.776
		c-4.839,0-8.775-3.938-8.775-8.778V64.645c0-4.841,3.936-8.78,8.775-8.78h95.855c4.142,0,7.5-3.358,7.5-7.5v-20
		c0-4.142-3.358-7.5-7.5-7.5H43.776c-24.138,0-43.775,19.64-43.775,43.78v174.755c0,24.14,19.638,43.778,43.775,43.778h174.756
		c24.14,0,43.779-19.639,43.779-43.778v-91.186C262.312,144.071,258.954,140.713,254.812,140.713z'
              />
              <path
                d='M275.677,0h-79.553c-4.142,0-7.5,3.358-7.5,7.5v20c0,4.142,3.358,7.5,7.5,7.5h27.304
		L120.683,137.743c-2.929,2.929-2.929,7.677,0,10.607l14.142,14.143c1.407,1.407,3.314,2.197,5.304,2.197
		c1.989,0,3.897-0.79,5.303-2.197L248.177,59.748v27.303c0,4.142,3.358,7.5,7.5,7.5h20c4.142,0,7.5-3.358,7.5-7.5V7.5
		C283.177,3.358,279.819,0,275.677,0z'
              />
            </Svg>
          )}
        </StyledMagicLink>
      </Content>
    </Wrapper>
  )
}
