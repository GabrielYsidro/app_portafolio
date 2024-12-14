// pages/_app.tsx
import { AppProps } from 'next/app';
import Barra from '../components/Barra/Barra';
import '../styles/Barra.modules.css';
import '../styles/Cuadro.modules.css';
import '../styles/Tabla.modules.css'
import '../styles/globals.css';
import '../styles/Proyecto.modules.css'
import Head from 'next/head';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Porta Gabo</title>
        <meta name="Gabriel" content="Webserver" />
        <link rel="icon" href="toxan.png"></link>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');
        </style>
      </Head>
      <Barra />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;