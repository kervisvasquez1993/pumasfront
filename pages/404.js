import Link from 'next/link';
import Main from '../Layout/Main/Main';

const Custom404 = () => {
  return (
    <Main titlePage={"pagina no encontrada"}>
      <h1>404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
    
    </Main>
  );
};

export default Custom404;
