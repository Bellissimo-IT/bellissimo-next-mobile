import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import BottomNav from '../components/bottom-nav'
import Header from '../components/header'
import PizzaMain from '../components/pizza-data/pizza-data'
import styles from '../styles/Home.module.css'
import Cart from '../public/imgs/cart.png'
import { useEffect, useState } from 'react/cjs/react.development'

const MainWrapper = styled.div`
  padding-bottom: 55px;
`

const FloatCartBtn = styled.div`
  position: fixed;
  bottom: 70px;
  right: 15px;
  border-radius: 50%;
  border: 2px solid white;
  background: rgb(249, 34, 63);
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  z-index: 199;
  box-shadow: 0px 10px 10px rgba(249, 34, 63, .1);
  display: ${props => props.active ? "flex" : "none"};
`

export default function Home() {
  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 53);
   });
 }, []);
  return <>
    <MainWrapper>
      <Header headerTitle="Меню" />
      <PizzaMain />
      <BottomNav />
      <a href="cart" ><FloatCartBtn active={scroll===true}><Image src={Cart} height="25" width="25" /></FloatCartBtn></a>
    </MainWrapper>
  </>
}