import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { GlobalIndexStyle } from '../styles/pages/index'

const Home: React.FC = () => {
  return (
    <>
      <GlobalIndexStyle />
      <Head>
        <title>Ace</title>
        <link rel="shortcut icon" href="images/ace.png" type="image/x-icon" />
      </Head>

      <Header></Header>

      <Footer></Footer>
    </>
  )
}

export default Home
