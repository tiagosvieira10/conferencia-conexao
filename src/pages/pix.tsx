import { PixContainer } from "@/styles/pix"
import qrCodePix from "../assets/qrCodePix.png"
import Image from "next/image"
import Link from "next/link"

export default function Pix() {
  return(
    <PixContainer>
      <Image alt="" src={qrCodePix}/>
      <h3>Você irá comprar no Lote 1<br /><strong>Valor: R$50,00</strong></h3>
      <p>Após concluir o pagamento enviar comprovante para <Link href={''}></Link></p>
    </PixContainer>

  )
}