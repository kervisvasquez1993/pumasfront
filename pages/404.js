import Link from 'next/link';
import Main from '../Layout/Main/Main';

const Custom404 = () => {
  return (
    <Main titlePage={blog?.attributes?.TitleBlog}>
      <h1>404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <Link href="/">
        <a>Volver a la página de inicio</a>
      </Link>
    </Main>
  );
};

export default Custom404;
