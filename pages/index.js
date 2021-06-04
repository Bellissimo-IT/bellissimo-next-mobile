import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import BottomNav from '../components/bottom-nav'
import Header from '../components/header'
import PizzaMain from '../components/pizza-data/pizza-data'
import styles from '../styles/Home.module.css'

const MainWrapper = styled.div`
  padding-bottom: 55px;
`

export default function Home() {
  return <>
    <MainWrapper>
      <Header headerTitle="Меню" />
      <PizzaMain />
      <BottomNav />
    </MainWrapper>
  </>
}