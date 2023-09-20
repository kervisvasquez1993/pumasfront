import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="error-container">
      <h1>404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <Link href="/">
        <a>Volver a la página de inicio</a>
      </Link>
    </div>
  );
};

export default Custom404;
