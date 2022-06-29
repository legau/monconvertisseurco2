import React from 'react'
import styled from 'styled-components'

import Equivalent from './frise/Equivalent'

const Wrapper = styled.div`
  position: relative;
`
const Step = styled.div`
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
export default function List(props) {
  return (
    <Wrapper>
      <Title>
        Moins de <strong>10 g</strong> de CO<sub>2</sub>e
      </Title>
      <Step>
        {props.equivalentsToDisplay
          .filter((equivalent) => equivalent.totalMultiplied < 0.01)
          .map((equivalent) => (
            <Equivalent equivalent={equivalent} />
          ))}
      </Step>
      <Title>
        De <strong>10 g</strong> à <strong>100 g</strong> de CO<sub>2</sub>e
      </Title>
      <Step>
        {props.equivalentsToDisplay
          .filter(
            (equivalent) =>
              equivalent.totalMultiplied > 0.01 &&
              equivalent.totalMultiplied < 0.1
          )
          .map((equivalent) => (
            <Equivalent equivalent={equivalent} />
          ))}
      </Step>
      <Title>
        De <strong>100 g</strong> à <strong>1 kg</strong> de CO<sub>2</sub>e
      </Title>
      <Step>
        {props.equivalentsToDisplay
          .filter(
            (equivalent) =>
              equivalent.totalMultiplied > 0.1 && equivalent.totalMultiplied < 1
          )
          .map((equivalent) => (
            <Equivalent equivalent={equivalent} />
          ))}
      </Step>
      <Title>
        De <strong>1 kg</strong> à <strong>10 kg</strong> de CO<sub>2</sub>e
      </Title>
      <Step>
        {props.equivalentsToDisplay
          .filter(
            (equivalent) =>
              equivalent.totalMultiplied > 1 && equivalent.totalMultiplied < 10
          )
          .map((equivalent) => (
            <Equivalent equivalent={equivalent} />
          ))}
      </Step>
      <Title>
        De <strong>10 kg</strong> à <strong>100 kg</strong> de CO<sub>2</sub>e
      </Title>
      <Step>
        {props.equivalentsToDisplay
          .filter(
            (equivalent) =>
              equivalent.totalMultiplied > 10 &&
              equivalent.totalMultiplied < 100
          )
          .map((equivalent) => (
            <Equivalent equivalent={equivalent} />
          ))}
      </Step>

      <Title>
        De <strong>100 kg</strong> à <strong>1 000 kg</strong> de CO<sub>2</sub>
        e
      </Title>
      <Step>
        {props.equivalentsToDisplay
          .filter(
            (equivalent) =>
              equivalent.totalMultiplied > 100 &&
              equivalent.totalMultiplied < 1000
          )
          .map((equivalent) => (
            <Equivalent equivalent={equivalent} />
          ))}
      </Step>
      <Title>
        Plus de <strong>1 000 kg</strong> de CO<sub>2</sub>e
      </Title>
      <Step>
        {props.equivalentsToDisplay
          .filter((equivalent) => equivalent.totalMultiplied > 1000)
          .map((equivalent) => (
            <Equivalent equivalent={equivalent} />
          ))}
      </Step>
    </Wrapper>
  )
}
