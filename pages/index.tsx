import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../consumables/Navbar';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        {/* TODO: */}
      </Head>
      <main>
        <Navbar />
        <div>
            {`Hi i'm the host nextjs application!`}
        </div>
      </main>
    </div>
  )
}

export default Home
