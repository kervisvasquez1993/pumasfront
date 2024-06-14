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
import Head from "next/head";
const defaultMetadata = {
  title: "Título por defecto",
  description: "Descripción por defecto",
};

function MyApp({ Component, pageProps }) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  // const metadata = { ...defaultMetadata, ...pageProps.metadata };

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

  return (
    <>
      <Head>
        <title>{"test"}</title>
        <meta name="description" content={"test"} />
      </Head>
      <ScreenSizeProvider>
        <LocaleProvider>
          <MenuProvider>
            <ModeloProvider>
              <PagesProvider>
                <PatrocindadoresProvider>
                  <DonationsProvider>
                    <Component {...pageProps} />
                  </DonationsProvider>
                </PatrocindadoresProvider>
              </PagesProvider>
            </ModeloProvider>
          </MenuProvider>
        </LocaleProvider>
      </ScreenSizeProvider>
    </>
  );
}
export default MyApp;
