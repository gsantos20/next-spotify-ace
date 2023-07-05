import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <Header></Header>

      <Footer></Footer>
    </div>
  )
}

export default Home
