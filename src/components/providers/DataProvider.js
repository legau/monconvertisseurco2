import React, { useState } from 'react'

import DataContext from 'utils/DataContext'
import boisson from 'data/categories/boisson.json'
import deplacement from 'data/categories/deplacement.json'
import electromenager from 'data/categories/electromenager.json'
import habillement from 'data/categories/habillement.json'
import mobilier from 'data/categories/mobilier.json'
import numerique from 'data/categories/numerique.json'
import repas from 'data/categories/repas.json'
import usagenumerique from 'data/categories/usagenumerique.json'
import categories from 'data/categories.json'
import ecv from 'data/ecv.json'
import scenarios from 'data/scenarios.json'

const equivalents = [
  ...boisson,
  ...deplacement,
  ...electromenager,
  ...habillement,
  ...mobilier,
  ...numerique,
  ...repas,
  ...usagenumerique,
].map((equivalent) => ({ ...equivalent, id: equivalent.slug }))

export default function DataProvider(props) {
  const [tiles, setTiles] = useState([])

  return (
    <DataContext.Provider
      value={{
        equivalents,
        categories,
        ecv,
        scenarios,
        tiles,
        setTiles,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}
