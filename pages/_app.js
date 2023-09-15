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

function MyApp({ Component, pageProps }) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);


  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

  return (
    <ScreenSizeProvider>
      <LocaleProvider>
        <MenuProvider>
          <PagesProvider>
            <ModeloProvider>
              <DonationsProvider>
                <Component {...pageProps} />
              </DonationsProvider>
            </ModeloProvider>
          </PagesProvider>
        </MenuProvider>
      </LocaleProvider>
    </ScreenSizeProvider>

  );
}
export default MyApp;
