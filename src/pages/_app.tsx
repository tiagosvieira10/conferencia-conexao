import { globalStyles } from "@/styles/global"
import { AppProps } from "next/app"
// import Image from "next/image"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (  
    <Component {...pageProps}/>
  )
}