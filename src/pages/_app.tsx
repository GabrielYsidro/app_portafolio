// pages/_app.tsx
import { AppProps } from 'next/app';
import Barra from '../components/Barra/Barra';
import '../styles/Barra.modules.css'
import '../styles/Cuadro.modules.css'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <title>My App</title>
        <meta name="Gabriel" content="Webserver" />
        <link rel="icon" href ="/toxan.png"></link>
      </Head>
      <section className="barra">
        <Barra />
      </section>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
