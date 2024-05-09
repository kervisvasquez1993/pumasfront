import "normalize.css/normalize.css";
import "../styles/globals.css";
import "../styles/positionElement.css";
import "../styles/swipper.css";
import "../styles/tailwind.css";
import "../styles/stylePage.css";
import "../styles/NavBar.css";
import { MenuProvider } from "../context/MenuProvider";
import { useEffect, useState } from "react";
import { ModeloProvider } from "../context/ModelosProvider";
import { DonationsProvider } from "../context/DonationsProvider";
import { PagesProvider } from "../context/PagesProvider";
import { ScreenSizeProvider } from "../context/ScreenSizeProvider";
import { LocaleProvider } from "../context/LocalesProvider";
import { PatrocindadoresProvider } from "../context/PatrocinadoresProvider";
const defaultMetadata = {
  title: "Título por defecto",
  description: "Descripción por defecto",
};

function MyApp({ Component, pageProps }) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  
  const metadata = { ...defaultMetadata, ...pageProps.metadata };

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

  return (
    <ScreenSizeProvider>
      <LocaleProvider>
        <MenuProvider>
          <ModeloProvider>
            <PagesProvider>

              <PatrocindadoresProvider>
                <DonationsProvider>
                  <Component {...pageProps} metadata={metadata} />
                </DonationsProvider>
              </PatrocindadoresProvider>

            </PagesProvider>
          </ModeloProvider>
        </MenuProvider>
      </LocaleProvider>
    </ScreenSizeProvider>

  );
}
export default MyApp;
