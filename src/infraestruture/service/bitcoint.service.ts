import PaymentAntiCurreuption from "../../domain/anti-curruption/payment.interface";

export default class BitCointPayment implements PaymentAntiCurreuption {
  constructor(payalConfig: any) {
    // Configurar o paypal e se conectar
  }
  checkAmount(toPay: number, givenValue: number): boolean {
    return toPay == givenValue;
  }
  addPayment(toPay: number, value: number): string {
    if (this.checkAmount(toPay, value)) {
      console.log("fazer pagamento usando o bitcoin");
      return `Valor a pagar: ${toPay} | valor pago: ${value}`;
    }
    throw new Error("Certifica - se de passar o valor correto");
  }
}
