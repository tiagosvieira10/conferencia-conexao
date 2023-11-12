import { PaymentFormContainer } from "@/styles/paymentForms";
import { CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";

export default function PaymentForms() {
  return (
    <PaymentFormContainer>
      <Link href={'/'} className="voltar"> <CaretLeft/>Voltar</Link>

      <Link href={'/lineUp'}>
          <button className='line-up'>Line-up do evento</button>
      </Link>
      
      <Link href={'/lineUp'}>
          <button className='line-up'>Line-up do evento</button>
        </Link>
    </PaymentFormContainer>
  )}