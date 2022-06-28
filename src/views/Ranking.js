import React, { useState, useContext, useMemo } from 'react'
import styled from 'styled-components'

import { formatTotal } from 'utils/formatters'
import Section from 'components/base/Section'
import Button from 'components/base/Button'
import DataContext from 'utils/DataContext'
import Frise from './ranking/Frise'
import Graph from './ranking/Graph'

const BigTitle = styled.h1`
  margin: -0.5rem 0 0.75rem;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
`
const Text = styled.p`
  margin: 0 auto 2rem;
  font-size: 1.125rem;
  text-align: center;

  ${(props) => props.theme.mq.medium} {
    font-size: 1rem;
  }
`
const StyledButtonWrapper = styled(Button.Wrapper)`
  margin-bottom: 3rem;
`
export default function Ranking() {
  const [view, setView] = useState('frise')

  const { equivalents, scenarios } = useContext(DataContext)

  const equivalentsToDisplay = useMemo(
    () =>
      [
        ...equivalents
          .filter((equivalent) => equivalent.ranking)
          .filter(
            (equivalent) =>
              !scenarios.find(
                (scenario) => scenario.equivalent === equivalent.slug
              )
          )
          .map((equivalent) => ({
            ...equivalent,
            subtitle: null,
            totalMultiplied: formatTotal(equivalent),
          })),
        ...scenarios.map((scenario) => ({
          ...equivalents.find(
            (equivalent) => equivalent.slug === scenario.equivalent
          ),
          name: { fr: scenario.name.fr },
          subtitle: { fr: scenario.subtitle?.fr || '' },
          emoji: scenario.emoji,
          totalMultiplied:
            scenario.total ||
            formatTotal(
              equivalents.find(
                (equivalent) => equivalent.slug === scenario.equivalent
              )
            ) * scenario.multiplier,
          scenario: true,
        })),
      ].sort((a, b) => (a.totalMultiplied > b.totalMultiplied ? 1 : -1)),
    [equivalents, scenarios]
  )

  return (
    <Section>
      <Section.Content>
        <BigTitle>Ordres de grandeur</BigTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          feugiat justo sit amet nunc cursus, ac mattis enim ultrices.
          Pellentesque quis risus mauris. Nullam porttitor pellentesque felis,
          sed vulputate orci ultrices nec.
        </Text>
        <StyledButtonWrapper>
          <Button onClick={() => setView('frise')} hollow={view !== 'frise'}>
            Frise
          </Button>
          <Button onClick={() => setView('graph')} hollow={view !== 'graph'}>
            Graph
          </Button>
        </StyledButtonWrapper>
        {view === 'frise' ? (
          <Frise equivalentsToDisplay={equivalentsToDisplay} />
        ) : (
          <Graph equivalentsToDisplay={equivalentsToDisplay} />
        )}
      </Section.Content>
    </Section>
  )
}
