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
const Title = styled.h2`
  font-weight: normal;
`
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
          Moins de <strong>10 g</strong> de CO<sub>2</sub>e
        </Title>
        <Wrapper>
          {equivalentsToDisplay
            .filter((equivalent) => equivalent.totalMultiplied < 0.01)
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Wrapper>
        <Title>
          De <strong>10 g</strong> à <strong>100 g</strong> de CO<sub>2</sub>e
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
          De <strong>100 g</strong> à <strong>1 kg</strong> de CO<sub>2</sub>e
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
          De <strong>1 kg</strong> à <strong>5 kg</strong> de CO<sub>2</sub>e
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
          De <strong>5 kg</strong> à <strong>10 kg</strong> de CO<sub>2</sub>e
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
          De <strong>10 kg</strong> à <strong>50 kg</strong> de CO<sub>2</sub>e
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
          De <strong>50 kg</strong> à <strong>200 kg</strong> de CO<sub>2</sub>e
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
          De <strong>200 kg</strong> à <strong>500 kg</strong> de CO<sub>2</sub>
          e
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
          Plus de <strong>500 kg</strong> de CO<sub>2</sub>e
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
