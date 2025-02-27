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

export default function Avion() {
  return (
    <>
      <Title>
        En termes d'émissions de CO2<sub>e</sub>
      </Title>
      <Equivalents>
        <Equivalent size={[8, 8, 16]}>
          <Emojis>🛢🛢</Emojis>
          <Label>
            <strong>2 ans de chauffage</strong>
            <br />
            au fioul
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[9, 10, 24]}>
          <Emojis>💨💨💨</Emojis>
          <Label>
            <strong>3 ans de chauffage</strong>
            <br />
            au gaz
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[18, 16, 24]}>
          <Emojis>
            ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️
          </Emojis>
          <Label>
            <strong>18 ans de chauffage</strong>
            <br />
            électrique
          </Label>
        </Equivalent>
      </Equivalents>
      <Small>
        <strong>2 ans de chauffage</strong>
        <br />
        au fioul
        <br />=
        <br />
        <strong>3 ans de chauffage</strong>
        <br />
        au gaz
        <br />=
        <br />
        <strong>18 ans de chauffage</strong>
        <br />
        électrique
      </Small>
      <CenterLink to='/categories/deplacement'>
        Voir tous les modes de transport
      </CenterLink>
    </>
  )
}
