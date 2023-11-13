import { LineUpContainer, Preletor, PreletoresContainer } from "@/styles/lineUp";
import { CaretDoubleLeft } from "@phosphor-icons/react";
import Link from "next/link";

export default function LineUp() {
  return (
    <LineUpContainer>
      <Link href={'/'} className="voltar"> <CaretDoubleLeft/>Voltar</Link>

      <PreletoresContainer>
        <Preletor>
          <h2>Guilherme Andrade</h2>
        </Preletor>
        <Preletor>
          <h2>Lucas Machado</h2>
        </Preletor>
        <Preletor>
          <h2>Patricia Souza</h2>
        </Preletor>
        <Preletor>
          <h2>Paulo Souza</h2>
        </Preletor>
        <Preletor>
          <h2>Manoel Messias</h2>
        </Preletor>
      </PreletoresContainer>
    </LineUpContainer>

  )
}