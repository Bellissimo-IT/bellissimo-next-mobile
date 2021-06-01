import Head from 'next/head'
import Image from 'next/image'
import BottomNav from '../components/bottom-nav'
import Header from '../components/header'
import PizzaMain from '../components/pizza-data/pizza-data'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <>
    <Header headerTitle="Меню" />
    <PizzaMain />
    <BottomNav />
  </>
}