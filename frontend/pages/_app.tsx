import type { AppProps } from 'next/app'
import { GlobalWrapper } from '../context/state'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalWrapper>
      <Component {...pageProps} />
    </GlobalWrapper>
  )
}

export default MyApp
