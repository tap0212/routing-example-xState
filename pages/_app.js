import { useRouter } from 'next/router'
import Layout from '../Components/Layout'
import Header from '../Components/Header'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const onBack = () => {
    router.back()
  }
  const isInitialRoute = router.route === '/';
  return (
    <Layout>
      <Header onBack={!isInitialRoute ? onBack : null} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp