import { HomeContainer } from '@/styles/home'
import bg from '../assets/site-conferencia (2).png'
import logoConf24 from '../assets/next (1).svg'
import logTheMission from '../assets/Conferencia 24.svg' 
import Image from "next/image"

export default function Home() {
  return(
    <HomeContainer>
      <Image src={bg} alt=""/>
      
    </HomeContainer>
   
  )
}