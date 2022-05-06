export default interface PaymentAntiCurreuption {
  checkAmount(toPay: number, givenValue: number): boolean;

  addPayment(toPay: number, value: number): string;
}
