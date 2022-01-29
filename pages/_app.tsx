import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DropMenu from '../src/components/DropMenu/DropMenu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <DropMenu className="pinnedDropMenu" />
        <Component {...pageProps} />
      </>
      
  );
}

export default MyApp
