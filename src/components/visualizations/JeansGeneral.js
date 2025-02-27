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

export default function JeansGeneral() {
  return (
    <>
      <Title>
        En termes d'émissions de CO2<sub>e</sub>
      </Title>
      <Equivalents>
        <Equivalent size={[7.5, 6, 8]}>
          <Emojis large>👖</Emojis>
          <Label>
            fabriquer
            <br />
            <strong>1 jeans</strong>
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[7.5, 6, 8]}>
          <Emojis>📱</Emojis>
          <Label>
            produire
            <br />
            <strong>1 smartphone</strong>
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[10, 8, 24]}>
          <Emojis>🥩🥩🥩</Emojis>
          <Label>
            consommer
            <br />
            <strong>3 repas avec du boeuf</strong>
          </Label>
        </Equivalent>
      </Equivalents>
      <Small>
        fabriquer
        <br />
        <strong>1 jeans</strong>
        <br />=<br />
        produire
        <br />
        <strong>1 smartphone</strong>
        <br />=<br />
        consommer
        <br />
        <strong>4 repas avec du boeuf</strong>
      </Small>
      <CenterLink to='/co2e'>Voir plus d'équivalences</CenterLink>
    </>
  )
}
