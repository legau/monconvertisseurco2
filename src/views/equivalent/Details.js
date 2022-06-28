import React from 'react'
import styled from 'styled-components'

import { formatName } from 'utils/formatters'
import Section from 'components/base/Section'
import MagicLink from 'components/base/MagicLink'
import ShareButton from 'components/misc/ShareButton'
import Value from './details/Value'

const Title = styled.h1``
const Subtitle = styled.span`
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 0;

  ${(props) => props.theme.mq.small} {
    font-size: 1.125rem;
    line-height: inherit;
  }
`
const Br = styled.br`
  display: none;
  ${(props) => props.theme.mq.small} {
    display: inline;
  }
`
const StyledSectionContent = styled(Section.Content)`
  margin-bottom: 3.5rem;

  ${(props) => props.theme.mq.small} {
    display: block;
    margin-bottom: 2rem;
  }
`
const Disclaimer = styled.p`
  max-width: 27.25rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`
const StyledMagicLink = styled(MagicLink)`
  font-size: 0.875rem;
`
export default function Details(props) {
  return (
    <>
      <Section>
        <Section.Content flex>
          <Title>
            {props.category.multiplier !== 1 ? '1 ' : ''}
            {formatName(
              props.equivalent.name.fr,
              1,
              props.category.multiplier === 1
            )}
            <Br />{' '}
            {props.equivalent.subtitle && (
              <Subtitle>
                ({formatName(props.equivalent.subtitle.fr, 1)})
              </Subtitle>
            )}
          </Title>
          <ShareButton title />
        </Section.Content>
      </Section>
      <Value equivalent={props.equivalent} />
      <Section>
        <StyledSectionContent flex>
          <Disclaimer>
            Valeurs exprimées en {props.category?.unit} CO2e émis{' '}
            {props.category?.including}.
          </Disclaimer>
          {props.equivalent.source && (
            <StyledMagicLink to={props.equivalent.source}>
              Source
            </StyledMagicLink>
          )}
        </StyledSectionContent>
      </Section>
    </>
  )
}
