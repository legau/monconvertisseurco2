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

export default function Email() {
  return (
    <>
      <Title>
        En termes d'émissions de CO2<sub>e</sub>
      </Title>
      <Equivalents>
        <Equivalent size={[7.5, 6, 8]}>
          <Emojis>🚗</Emojis>
          <Label>
            <strong>1 km</strong>
            <br />
            en voiture
          </Label>
        </Equivalent>
        <Equals>=</Equals>
        <Equivalent size={[26, 23, 50]}>
          <Emojis>✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️✉️</Emojis>
          <Label>
            <strong>26</strong>
            <br />
            emails
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
        <strong>26</strong>
        <br />
        emails
      </Small>
      <CenterLink to='/co2e'>Voir plus d'équivalences</CenterLink>
    </>
  )
}
