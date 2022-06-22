import React, { useContext } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'
import AnimatedNumber from 'animated-number-react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import useIframe from 'hooks/useIframe'
import { formatNumber, formatName, formatTotal } from 'utils/formatters'
import DataContext from 'utils/DataContext'
import Emoji from 'components/base/Emoji'
import Button from 'components/base/Button'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(33.3333% - 1rem);
  padding: 1.125rem 0.25rem;
  background-color: ${(props) =>
    props.theme.colors[props.background ? 'textLight' : 'second']};
  border-radius: 1rem;

  ${(props) => props.theme.mq.medium} {
    width: calc(33.3333% - 0.5rem);
  }
  ${(props) => props.theme.mq.small} {
    width: calc(50% - 0.375rem);
  }
`
const ButtonDrag = styled.button`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  height: 1.125rem;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: grab;

  svg {
    width: auto;
    height: 100%;
    transition: transform 300ms ease-out;
    transform-origin: center;

    circle {
      fill: ${(props) => props.theme.colors.main};
    }
  }
`
const ButtonRemove = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 1rem;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 100%;
    height: auto;
    transition: transform 300ms ease-out;
    transform-origin: center;

    path {
      fill: ${(props) => props.theme.colors.main};
    }
  }

  &:hover {
    svg {
      transform: rotate(360deg);
    }
  }
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
  font-size: 0.875rem;
  font-weight: normal;
  text-align: center;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.text};
`
const Number = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: bold;

  ${(props) => props.theme.mq.small} {
    font-size: 1.75rem;
  }
`
const Name = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 2.125rem;
`
const Subtitle = styled.span`
  display: block;
  font-weight: 300;
  font-size: 0.75rem;
`
const StyledButton = styled(Button)`
  padding: 0.5em 0.75rem;
  font-size: 0.8125rem;

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
    <Wrapper background={props.background}>
      <EmojiWrapper>
        <Emoji>{props.equivalent.emoji}</Emoji>
      </EmojiWrapper>
      <Title>
        <Name>
          {category?.multiplier}{' '}
          {formatName(props.equivalent.name.fr, category?.multiplier)}
          {props.equivalent.subtitle ? (
            <Subtitle>
              {formatName(props.equivalent.subtitle.fr, categories.multiplier)}
            </Subtitle>
          ) : (
            ''
          )}
        </Name>
      </Title>
      <Button.Wrapper>
        <StyledButton
          to={`${iframe ? location.origin : ''}/categories/${category?.slug}/${
            props.equivalent.slug
          }`}
        >
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
        </StyledButton>
      </Button.Wrapper>
    </Wrapper>
  )
}
