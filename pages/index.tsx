import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import FederatedHomePage from '../src/consumables/home'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();

  const pushToOriginStory = () => {
    router.push('/literature/OriginObject');
  }

  return (
    <React.Fragment>
      <Head>
        {/* TODO: */}
      </Head>
      <FederatedHomePage onClick={pushToOriginStory} />
    </React.Fragment>
  )
}

export default Home
