import { HomeContainer, HomeMenu } from '@/styles/home'
import bg from '../assets/site-conferencia (2).png'
import logoConf24 from '../assets/next (2).svg'
import logTheMission from '../assets/Conferencia 24.svg' 
import Image from "next/image"

export default function Home() {
  return(
    <HomeContainer>
      <Image src={logoConf24} alt='' className='conf24' height={300} width={300}/>
      <Image src={logTheMission} alt='' className='theMission' height={400} width={400}/>

      <HomeMenu>
        <button className='line-up'>Line-up do evento</button>
        <button className='ingresso'>Garantir ingresso 1º lote</button>
      </HomeMenu>
    </HomeContainer>
   
  )
}