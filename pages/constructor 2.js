import Head from 'next/head'
import Image from 'next/image'
import TypeChoose from '../components/type-choose/type-choose'
import Header from '../components/header'


export default function Constructor() {
    return <>
        <Header headerTitle="Конструктор" />
        <TypeChoose />
    </>
}