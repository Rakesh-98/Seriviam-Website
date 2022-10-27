import '../styles/globals.css'
import Navbar from '../component/navbar'
import Footer from '../component/footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
