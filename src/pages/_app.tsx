import type { AppProps } from 'next/app'
import '../styles/global.scss'

function MyApp({pageProps,Component}:AppProps){
    return <Component {...pageProps} />
}

export default MyApp