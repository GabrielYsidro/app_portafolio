// pages/_app.tsx
import { AppProps } from 'next/app';
import Barra from '../components/Barra/Barra';
import '../styles/Barra.modules.css'
import '../styles/Cuadro.modules.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <section className="barra">
        {/* Barra debe ser accesible desde cualquier página */}
        <Barra />
      </section>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
