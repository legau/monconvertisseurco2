import React from 'react'
import styled from 'styled-components'

import Equivalent from './frise/Equivalent'

const Wrapper = styled.div`
  position: relative;
`
const Step = styled.div`
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
export default function Frise(props) {
  return (
    <Wrapper>
      <Step>
        <Tiles>
          {props.equivalentsToDisplay
            .filter((equivalent) => equivalent.totalMultiplied < 0.01)
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Tiles>
      </Step>
      <Step>
        <Magnitude>10 g</Magnitude>
        <Tiles>
          {props.equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 0.01 &&
                equivalent.totalMultiplied < 0.1
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Tiles>
      </Step>
      <Step>
        <Magnitude>100 g</Magnitude>
        <Tiles>
          {props.equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 0.1 &&
                equivalent.totalMultiplied < 1
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Tiles>
      </Step>
      <Step>
        <Magnitude>1 kg</Magnitude>
        <Tiles>
          {props.equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 1 &&
                equivalent.totalMultiplied < 10
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Tiles>
      </Step>
      <Step>
        <Magnitude>10 kg</Magnitude>
        <Tiles>
          {props.equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 10 &&
                equivalent.totalMultiplied < 100
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Tiles>
      </Step>
      <Step>
        <Magnitude>100 kg</Magnitude>
        <Tiles>
          {props.equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 100 &&
                equivalent.totalMultiplied < 1000
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Tiles>
      </Step>
      <Step>
        <Magnitude>1 tonne</Magnitude>
        <Tiles>
          {props.equivalentsToDisplay
            .filter(
              (equivalent) =>
                equivalent.totalMultiplied > 1000 &&
                equivalent.totalMultiplied < 10000
            )
            .map((equivalent) => (
              <Equivalent equivalent={equivalent} />
            ))}
        </Tiles>
      </Step>
    </Wrapper>
  )
}
