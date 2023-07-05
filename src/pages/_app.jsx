import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'

import Navbar from '../components/LocalNavbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  )
}
