import React, { useContext } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import DataContext from 'utils/DataContext'
import MagicLink from 'components/base/MagicLink'
import Emoji from 'components/base/Emoji'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
`
const Column = styled.div``
const Items = styled.ul`
  padding: 0;
  list-style: none;
  column-count: ${(props) => (props.columns ? 2 : 1)};
`
const Item = styled.li`
  margin-bottom: 0.75rem;
`
const StyledMagicLink = styled(MagicLink)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`
const StyledEmoji = styled(Emoji)`
  margin: 0 0.25rem 0.25rem 0;
  font-size: 1.25rem;
`
export default function Menu() {
  const { categories } = useContext(DataContext)

  const location = useLocation()

  return (
    <Wrapper>
      <Column>
        <Items columns>
          {categories.map((category) => (
            <Item key={category.id}>
              <StyledMagicLink to={`/categories/${category.slug}`}>
                <StyledEmoji>{category.emoji}</StyledEmoji> {category.name.fr}
              </StyledMagicLink>
            </Item>
          ))}
        </Items>
      </Column>
      <Column>
        <Items>
          <Item>
            <StyledMagicLink to='/co2e'>Convertisseur CO2e</StyledMagicLink>
          </Item>
          <Item>
            <StyledMagicLink to='/integration'>
              Intégrer nos simulateurs
            </StyledMagicLink>
          </Item>
        </Items>
      </Column>
    </Wrapper>
  )
}
