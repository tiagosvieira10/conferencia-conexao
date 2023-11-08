import { HomeContainer } from '@/styles/home'
import bg from '../assets/site-conferencia.png'
import Image from "next/image"

export default function Home() {
  return(
    <HomeContainer>
      <Image src={bg} alt=""/>
      <h1>Hello world</h1>
    </HomeContainer>
   
  )
}