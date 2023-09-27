import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { GlobalIndexStyle } from '../styles/pages/index'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <>
      <GlobalIndexStyle />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Ace</title>
        <link rel="shortcut icon" href="images/ace.png" type="image/x-icon" />
      </Head>

      <Header/>

      <Footer/>
    </>
  )
}

export default Home
