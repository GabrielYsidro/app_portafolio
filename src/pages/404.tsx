import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="container">
      <h1 className="title">404 - Página no encontrada</h1>
      <p className="description">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link href="/">
        <a className="homeLink">Volver al inicio</a>
      </Link>
    </div>
  );
};

export default Custom404;