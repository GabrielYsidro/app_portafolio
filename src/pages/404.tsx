import Link from 'next/link';
import styles from '../styles/404.module.css';

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Página no encontrada</h1>
      <p className={styles.description}>
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link href="/">
        <a className={styles.homeLink}>Volver al inicio</a>
      </Link>
    </div>
  );
};

export default Custom404;