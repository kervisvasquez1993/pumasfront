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

function MyApp({ Component, pageProps }) {
  return (
    <>
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
