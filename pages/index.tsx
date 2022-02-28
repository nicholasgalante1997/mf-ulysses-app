import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import FederatedHomePage from '../src/consumables/home'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        {/* TODO: */}
      </Head>
      <FederatedHomePage />
    </React.Fragment>
  )
}

export default Home
