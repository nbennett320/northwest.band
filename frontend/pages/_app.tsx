import type { AppProps } from 'next/app'
import { GlobalProvider } from '../context/state'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
