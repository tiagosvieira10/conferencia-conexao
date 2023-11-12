import { HomeContainer, HomeMenu } from '@/styles/home'
import logTheMission from '../assets/Conferencia 24.svg' 
import Image from "next/image"
import sublinhado from '../assets/sublinhado.svg'
import Link from 'next/link'
import { Ticket } from '@phosphor-icons/react'

export default function Home() {
  return(
    <HomeContainer>
      <Image src={logTheMission} alt='' className='theMission' height={400} width={400}/>

      <HomeMenu>
        <Link href={'/lineUp'}>
          <button className='line-up'>Line-up do evento</button>
        </Link>

        <Link href={'https://www.sympla.com.br/conferencia-conexao-2024__2245599'} target='_blank'>
          <button className='ingresso'><strong><Ticket/>Garantir ingresso</strong></button>      
        </Link>
      </HomeMenu>

      <footer>
        <Image src={sublinhado} alt='' width={350} height={350}/>
      </footer>
    </HomeContainer>
   
  )
}