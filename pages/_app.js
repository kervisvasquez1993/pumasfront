import "normalize.css/normalize.css";
import "../styles/globals.css";
import "../styles/positionElement.css";
import "../styles/swipper.css";
import "../styles/tailwind.css";
import "../styles/stylePage.css";
import { MenuProvider } from "../context/MenuProvider";
import { useEffect, useState } from "react";
import { ModeloProvider } from "../context/ModelosProvider";
function MyApp({ Component, pageProps }) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

  return (
    <MenuProvider>
      <ModeloProvider>
        <Component {...pageProps} />
      </ModeloProvider>
    </MenuProvider>
  );
}
export default MyApp;
