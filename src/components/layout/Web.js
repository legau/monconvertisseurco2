import React from 'react'
import styled from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'

import { GlobalStyle } from 'utils/styles'
import useInteraction from 'hooks/useInteraction'
import ModalProvider from 'components/providers/ModalProvider'
import UXProvider from 'components/providers/UXProvider'
import DataProvider from 'components/providers/DataProvider'
import Seo from './web/Seo'
import Header from './web/Header'
import Nav from './web/Nav'
import BreadCrumb from './web/BreadCrumb'
import Footer from './web/Footer'
import ModalWrapper from 'components/wrappers/ModalWrapper'

const queryClient = new QueryClient()

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const FullScreen = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 5rem;
`
export default function Web(props) {
  useInteraction()

  return (
    <>
      <Wrapper>
        <Seo title={props.title} image={props.image} />
        <QueryClientProvider client={queryClient}>
          <UXProvider>
            <DataProvider>
              <ModalProvider>
                <GlobalStyle />
                <Content>
                  <FullScreen>
                    <Header />
                    <Nav />
                    <BreadCrumb breadcrumb={props.breadcrumb} />
                    {props.children}
                  </FullScreen>
                  <Footer />
                </Content>
                <ModalWrapper />
              </ModalProvider>
            </DataProvider>
          </UXProvider>
        </QueryClientProvider>
      </Wrapper>
    </>
  )
}
