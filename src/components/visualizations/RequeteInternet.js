import React from 'react'

import {
  Title,
  Equivalents,
  Equivalent,
  Emojis,
  Label,
  Equals,
  CenterLink,
  Small,
} from 'components/misc/Visualization'

export default function RequeteInternet() {
  return (
    <>
      <Title>
        En termes d'émissions de CO2<sub>e</sub>
      </Title>
      <Equivalents>
        <Equivalent size={[, 6, 8]}>
          <Emojis>🚗</Emojis>
          <Label>
            <strong>1 km</strong>
            <br />
            en voiture
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[29, 28, 58]}>
          <Emojis small>
            👩‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻🧑‍💻👩‍💻👩‍💻👩‍💻👩‍💻👩‍💻
          </Emojis>
          <Label>
            <strong>112</strong>
            <br />
            requête internet
          </Label>
        </Equivalent>
      </Equivalents>
      <Small>
        <br />
        <strong>1 km</strong>
        <br />
        en voiture
        <br />=
        <br />
        <strong>112 km</strong>
        <br />
        requête internet
      </Small>
      <CenterLink to='/co2e'>Voir plus d'équivalences</CenterLink>
    </>
  )
}
