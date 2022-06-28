import React, { useMemo, useContext } from 'react'
import styled from 'styled-components'

import { formatTotal } from 'utils/formatters'
import Section from 'components/base/Section'
import DataContext from 'utils/DataContext'
import Equivalent from './ranking/Equivalent'

const BigTitle = styled.h1`
  margin: -0.5rem 0 0.75rem;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
`
const Text = styled.p`
  margin: 0 auto 4rem;
  font-size: 1.125rem;
  text-align: center;

  ${(props) => props.theme.mq.medium} {
    font-size: 1rem;
  }
`
const Frise = styled.div`
  position: relative;
`
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 16.25rem;
  padding: 3.5rem 0 3.5rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 0.125rem;
    background-color: ${(props) => props.theme.colors.main};
  }
`

const Magnitude = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.25rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.main};
  line-height: 0.7;
  white-space: nowrap;
  background-color: ${(props) => props.theme.colors.background};

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    width: 1rem;
    height: 0.125rem;
    background-color: ${(props) => props.theme.colors.main};
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    width: 1rem;
    height: 0.125rem;
    background-color: ${(props) => props.theme.colors.main};
  }
`
const Tiles = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  ${(props) => props.theme.mq.medium} {
    gap: 0.75rem;
  }
`
export default function Ranking() {
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
        <BigTitle>Ordres de grandeurs</BigTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          feugiat justo sit amet nunc cursus, ac mattis enim ultrices.
          Pellentesque quis risus mauris. Nullam porttitor pellentesque felis,
          sed vulputate orci ultrices nec.
        </Text>
        <Frise>
          <Wrapper>
            <Tiles>
              {equivalentsToDisplay
                .filter((equivalent) => equivalent.totalMultiplied < 0.01)
                .map((equivalent) => (
                  <Equivalent equivalent={equivalent} />
                ))}
            </Tiles>
          </Wrapper>
          <Wrapper>
            <Magnitude>10 g</Magnitude>
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
            <Magnitude>100 g</Magnitude>
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
              1<span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
              000 g
            </Magnitude>
            <Tiles>
              {equivalentsToDisplay
                .filter(
                  (equivalent) =>
                    equivalent.totalMultiplied > 1 &&
                    equivalent.totalMultiplied < 10
                )
                .map((equivalent) => (
                  <Equivalent equivalent={equivalent} />
                ))}
            </Tiles>
          </Wrapper>
          <Wrapper>
            <Magnitude>
              10
              <span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
              000 g
            </Magnitude>
            <Tiles>
              {equivalentsToDisplay
                .filter(
                  (equivalent) =>
                    equivalent.totalMultiplied > 10 &&
                    equivalent.totalMultiplied < 100
                )
                .map((equivalent) => (
                  <Equivalent equivalent={equivalent} />
                ))}
            </Tiles>
          </Wrapper>
          <Wrapper>
            <Magnitude>
              100
              <span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
              000 g
            </Magnitude>
            <Tiles>
              {equivalentsToDisplay
                .filter(
                  (equivalent) =>
                    equivalent.totalMultiplied > 100 &&
                    equivalent.totalMultiplied < 1000
                )
                .map((equivalent) => (
                  <Equivalent equivalent={equivalent} />
                ))}
            </Tiles>
          </Wrapper>
          <Wrapper>
            <Magnitude>
              1 <span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
              000
              <span dangerouslySetInnerHTML={{ __html: '&ThinSpace;' }} />
              000 g
            </Magnitude>
            <Tiles>
              {equivalentsToDisplay
                .filter(
                  (equivalent) =>
                    equivalent.totalMultiplied > 1000 &&
                    equivalent.totalMultiplied < 10000
                )
                .map((equivalent) => (
                  <Equivalent equivalent={equivalent} />
                ))}
            </Tiles>
          </Wrapper>
        </Frise>
      </Section.Content>
    </Section>
  )
}
