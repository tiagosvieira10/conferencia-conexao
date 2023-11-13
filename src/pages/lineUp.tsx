import { LineUpContainer, Preletor, PreletoresContainer } from "@/styles/lineUp";
import { CaretDoubleLeft } from "@phosphor-icons/react";
import {andrade, machado, messias, patricia, paulo} from '../assets/lineUp'
import Link from "next/link";
import Image from "next/image";

export default function LineUp() {
  return (
    <LineUpContainer>
      <Link href={'/'} className="voltar"> <CaretDoubleLeft/>Voltar</Link>

      <PreletoresContainer>
        <Preletor className="andrade">
          <Image src={andrade} alt=""/>
          <h2>Guilherme Andrade</h2>
        </Preletor>
        <Preletor className="machado">
          <Image src={machado} alt=""/>
          <h2>Lucas Machado</h2>
        </Preletor>
        <Preletor className="patricia">
          <Image src={patricia} alt=""/>
          <h2>Patricia Souza</h2>
        </Preletor>
        <Preletor className="paulo">
          <Image src={paulo} alt=""/>
          <h2>Paulo Souza</h2>
        </Preletor>
        <Preletor className="messias">
          <Image src={messias} alt=""/>
          <h2>Manoel Messias</h2>
        </Preletor>
      </PreletoresContainer>
    </LineUpContainer>

  )
}