import React, { useState } from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'
import Equivalent from './graph/Equivalent'

const StyledButtonWrapper = styled(Button.Wrapper)`
  margin-top: 2rem;
`
export default function Graph(props) {
  const [step, setStep] = useState(0)
  const steps = [0.3, 10, 100, 1000, 10000, 100000]
  const equivalents = props.equivalentsToDisplay.filter(
    (equivalent) => equivalent.totalMultiplied < steps[step]
  )
  return (
    <>
      {equivalents.map((equivalent) => (
        <Equivalent
          equivalent={equivalent}
          category={{ multiplier: 1, unit: 'g' }}
          max={equivalents[equivalents.length - 1].totalMultiplied}
          key={equivalent.slug}
        />
      ))}
      <StyledButtonWrapper>
        <Button
          onClick={() => {
            setStep((prevStep) => prevStep + 1)
            setTimeout(
              () =>
                window.scrollTo({
                  top: 10000000000,
                  left: 0,
                  behavior: 'smooth',
                }),
              30
            )
          }}
        >
          Voir la suite
        </Button>
      </StyledButtonWrapper>
    </>
  )
}
