import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FederatedHomePage from '../consumables/home'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        {/* TODO: */}
      </Head>
      <FederatedHomePage />
    </div>
  )
}

export default Home
