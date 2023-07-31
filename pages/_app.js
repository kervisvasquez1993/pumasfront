import "normalize.css/normalize.css";
import "../styles/globals.css";
import "../styles/swipper.css";
import "../styles/tailwind.css";
import "../styles/stylePage.css";
import { MenuProvider } from "../context/MenuProvider";
function MyApp({ Component, pageProps }) {
  
  return (
    <MenuProvider>
      <Component {...pageProps} />;
    </MenuProvider>
  );
}
export default MyApp;


