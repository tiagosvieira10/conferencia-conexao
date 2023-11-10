import { LineUpContainer } from "@/styles/lineUp";
import Link from "next/link";

export default function LineUp() {
  return (
    <LineUpContainer>
      <Link href={'/'}>Voltar</Link>
      <h1>Line-Up do evento</h1>
    </LineUpContainer>
  )
}