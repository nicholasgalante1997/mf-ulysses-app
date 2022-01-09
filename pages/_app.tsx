import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react';
import NavBar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp
