import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "react-tippy/dist/tippy.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
