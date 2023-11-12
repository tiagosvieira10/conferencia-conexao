import { PaymentFormContainer } from "@/styles/paymentForms";
import { CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";
import pix from "../assets/pix.svg";
import cartao from "../assets/cartao.svg"
import Image from "next/image";

export default function PaymentForms() {
  return (
    <PaymentFormContainer>
      <Link href={'/'} className="voltar"> <CaretLeft/>Voltar</Link>

      <Link href={'/pix'}>
          <button className='methodPayments'> <Image src={pix} alt="" height={150} width={400}/> </button>
      </Link>

      <Link href={'/lineUp'}>
          <button className='methodPayments'><Image src={cartao} alt="" height={150} width={400}/></button>
      </Link>
    </PaymentFormContainer>
  )}