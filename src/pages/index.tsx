import { HomeContainer, HomeMenu } from '@/styles/home'
import logTheMission from '../assets/Conferencia 24.svg' 
import Image from "next/image"
import sublinhado from '../assets/sublinhado.svg'

export default function Home() {
  return(
    <HomeContainer>
      <Image src={logTheMission} alt='' className='theMission' height={400} width={400}/>

      <HomeMenu>
        <button className='line-up'>Line-up do evento</button>
        <button className='ingresso'><strong>Garantir ingresso</strong><br />( 1º lote)</button>
      </HomeMenu>

      <footer>
        <Image src={sublinhado} alt='' width={350} height={350}/>
      </footer>
    </HomeContainer>
   
  )
}