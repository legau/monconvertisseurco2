import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { formatTotal } from 'utils/formatters'
import Section from 'components/base/Section'
import DataContext from 'utils/DataContext'
import Equivalent from './ranking/Equivalent'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;

  ${(props) => props.theme.mq.medium} {
    gap: 0.75rem;
  }
`
const Title = styled.h2``
export default function Co2() {
  const { equivalents, categories, scenarios } = useContext(DataContext)

  const [equivalentsToDisplay, setEquivalentsToDisplay] = useState([])
  useEffect(() => {
    setEquivalentsToDisplay(
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
            totalMultiplied:
              formatTotal(equivalent) *
              categories.find((category) => category.id === equivalent.category)
                .multiplier,
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
      ].sort((a, b) => (a.totalMultiplied > b.totalMultiplied ? 1 : -1))
    )
  }, [equivalents, categories, scenarios])

  return (
    <Section>
      <Section.Content>
        <Title>
          Moins de 10 g de CO<sub>2</sub>e
        </Title>
        <Wrapper>
          {equivalentsToDisplay
            .filter((equivalent) => equivalent.totalMultiplied < 0.01)
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Wrapper>
        <Title>
          De 10 g à 100 g de CO<sub>2</sub>e
        </Title>
        <Wrapper>
          {equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 0.01 &&
                equivalent.totalMultiplied < 0.1
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Wrapper>
        <Title>
          De 100 g à 1 kg de CO<sub>2</sub>e
        </Title>
        <Wrapper>
          {equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 0.1 &&
                equivalent.totalMultiplied < 1
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Wrapper>
        <Title>
          De 1 kg à 5 kg de CO<sub>2</sub>e
        </Title>
        <Wrapper>
          {equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 1 && equivalent.totalMultiplied < 5
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Wrapper>
        <Title>
          De 5 kg à 10 kg de CO<sub>2</sub>e
        </Title>
        <Wrapper>
          {equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 5 &&
                equivalent.totalMultiplied < 10
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Wrapper>
        <Title>
          De 10 kg à 50 kg de CO<sub>2</sub>e
        </Title>
        <Wrapper>
          {equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 10 &&
                equivalent.totalMultiplied < 50
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Wrapper>
        <Title>
          De 50 kg à 200 kg de CO<sub>2</sub>e
        </Title>
        <Wrapper>
          {equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 50 &&
                equivalent.totalMultiplied < 200
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Wrapper>
        <Title>
          De 200 kg à 500 kg de CO<sub>2</sub>e
        </Title>
        <Wrapper>
          {equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 200 &&
                equivalent.totalMultiplied < 500
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Wrapper>
        <Title>
          Plus de 500 kg de CO<sub>2</sub>e
        </Title>
        <Wrapper>
          {equivalentsToDisplay
            .filter((equivalent) => equivalent.totalMultiplied > 500)
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Wrapper>
      </Section.Content>
    </Section>
  )
}
