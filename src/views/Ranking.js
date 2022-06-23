import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { formatTotal } from 'utils/formatters'
import Section from 'components/base/Section'
import DataContext from 'utils/DataContext'
import Equivalent from './ranking/Equivalent'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 5rem;

  &:hover {
    ${Magnitude} {
      opacity: 1;
    }
  }
`
const Magnitude = styled.div`
  position: absolute;
  top: calc(50%);
  right: -10rem;
  transform: translateY(-50%);
  font-size: 17rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.main};
  opacity: 0.7;
  line-height: 0.7;
  white-space: nowrap;
  transition: opacity 300ms;
  cursor: default;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`
const Small = styled.span`
  font-size: 9rem;
`
const Title = styled.h2`
  position: relative;
  font-weight: normal;
`
const Tiles = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  ${(props) => props.theme.mq.medium} {
    gap: 0.75rem;
  }
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
        <Wrapper>
          <Magnitude>
            <Small>
              x<span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            </Small>
            1
          </Magnitude>
          <Title>
            Moins de <strong>10 g</strong> de CO<sub>2</sub>e
          </Title>
          <Tiles>
            {equivalentsToDisplay
              .filter((equivalent) => equivalent.totalMultiplied < 0.01)
              .map((equivalent) => (
                <Equivalent equivalent={equivalent} />
              ))}
          </Tiles>
        </Wrapper>
        <Wrapper>
          <Magnitude>
            <Small>
              x<span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            </Small>
            10
          </Magnitude>
          <Title>
            De <strong>10 g</strong> à <strong>100 g</strong> de CO<sub>2</sub>e
          </Title>
          <Tiles>
            {equivalentsToDisplay
              .filter(
                (equivalent) =>
                  equivalent.totalMultiplied > 0.01 &&
                  equivalent.totalMultiplied < 0.1
              )
              .map((equivalent) => (
                <Equivalent equivalent={equivalent} />
              ))}
          </Tiles>
        </Wrapper>
        <Wrapper>
          <Magnitude>
            <Small>
              x<span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            </Small>
            100
          </Magnitude>
          <Title>
            De <strong>100 g</strong> à <strong>1 kg</strong> de CO<sub>2</sub>e
          </Title>
          <Tiles>
            {equivalentsToDisplay
              .filter(
                (equivalent) =>
                  equivalent.totalMultiplied > 0.1 &&
                  equivalent.totalMultiplied < 1
              )
              .map((equivalent) => (
                <Equivalent equivalent={equivalent} />
              ))}
          </Tiles>
        </Wrapper>
        <Wrapper>
          <Magnitude>
            <Small>
              x<span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            </Small>
            1<span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            000
          </Magnitude>
          <Title>
            De <strong>1 kg</strong> à <strong>5 kg</strong> de CO<sub>2</sub>e
          </Title>
          <Tiles>
            {equivalentsToDisplay
              .filter(
                (equivalent) =>
                  equivalent.totalMultiplied > 1 &&
                  equivalent.totalMultiplied < 5
              )
              .map((equivalent) => (
                <Equivalent equivalent={equivalent} />
              ))}
          </Tiles>
        </Wrapper>
        <Wrapper>
          <Magnitude>
            <Small>
              x<span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            </Small>
            5<span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            000
          </Magnitude>
          <Title>
            De <strong>5 kg</strong> à <strong>10 kg</strong> de CO<sub>2</sub>e
          </Title>
          <Tiles>
            {equivalentsToDisplay
              .filter(
                (equivalent) =>
                  equivalent.totalMultiplied > 5 &&
                  equivalent.totalMultiplied < 10
              )
              .map((equivalent) => (
                <Equivalent equivalent={equivalent} />
              ))}
          </Tiles>
        </Wrapper>
        <Wrapper>
          <Magnitude>
            <Small>
              x<span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            </Small>
            10
            <span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            000
          </Magnitude>
          <Title>
            De <strong>10 kg</strong> à <strong>50 kg</strong> de CO<sub>2</sub>
            e
          </Title>
          <Tiles>
            {equivalentsToDisplay
              .filter(
                (equivalent) =>
                  equivalent.totalMultiplied > 10 &&
                  equivalent.totalMultiplied < 50
              )
              .map((equivalent) => (
                <Equivalent equivalent={equivalent} />
              ))}
          </Tiles>
        </Wrapper>
        <Wrapper>
          <Magnitude>
            <Small>
              x<span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            </Small>
            50
            <span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            000
          </Magnitude>
          <Title>
            De <strong>50 kg</strong> à <strong>200 kg</strong> de CO
            <sub>2</sub>e
          </Title>
          <Tiles>
            {equivalentsToDisplay
              .filter(
                (equivalent) =>
                  equivalent.totalMultiplied > 50 &&
                  equivalent.totalMultiplied < 200
              )
              .map((equivalent) => (
                <Equivalent equivalent={equivalent} />
              ))}
          </Tiles>
        </Wrapper>
        <Wrapper>
          <Magnitude>
            <Small>
              x<span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            </Small>
            200
            <span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            000
          </Magnitude>
          <Title>
            De <strong>200 kg</strong> à <strong>500 kg</strong> de CO
            <sub>2</sub>e
          </Title>
          <Tiles>
            {equivalentsToDisplay
              .filter(
                (equivalent) =>
                  equivalent.totalMultiplied > 200 &&
                  equivalent.totalMultiplied < 500
              )
              .map((equivalent) => (
                <Equivalent equivalent={equivalent} />
              ))}
          </Tiles>
        </Wrapper>
        <Wrapper>
          <Magnitude>
            <Small>
              x<span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            </Small>
            500
            <span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
            000
          </Magnitude>
          <Title>
            Plus de <strong>500 kg</strong> de CO<sub>2</sub>e
          </Title>
          <Tiles>
            {equivalentsToDisplay
              .filter((equivalent) => equivalent.totalMultiplied > 500)
              .map((equivalent) => (
                <Equivalent equivalent={equivalent} />
              ))}
          </Tiles>
        </Wrapper>
        <span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
      </Section.Content>
      <span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
    </Section>
  )
}
