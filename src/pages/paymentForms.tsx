import { PaymentFormContainer } from "@/styles/paymentForms";
import Link from "next/link";

export default function PaymentForms() {
  return (
    <PaymentFormContainer>
      <Link href={'/'}>Voltar</Link>
      <h1>Página de pagamentos</h1>
    </PaymentFormContainer>
  )}