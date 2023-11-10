import { globalStyles } from "@/styles/global"
import { AppProps } from "next/app"
import logoConf24 from '../assets/next (2).svg'
import Image from "next/image"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Image src={logoConf24} alt='' className='conf24' height={200} width={200}/> 
      <Component {...pageProps}/>
    </>
  )
}