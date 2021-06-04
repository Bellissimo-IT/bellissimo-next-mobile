import Head from 'next/head'
import Image from 'next/image'
import TypeChoose from '../components/type-choose/type-choose'
import Header from '../components/header'

function Constructor() {
    return <>
        <Header headerTitle="Конструктор" />
        <TypeChoose />
    </>
}

export default Constructor