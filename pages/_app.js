import 'normalize.css/normalize.css';
import '../styles/globals.css'
import '../styles/tailwind.css'


function MyApp({ Component, pageProps }) {
  console.log('MyApp')
  return <Component {...pageProps} />
}

export default MyApp
