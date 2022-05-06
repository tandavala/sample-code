export default class OrderItem {
  private _produtName: string;
  private _quatity: number;
  private _price: number;

  constructor(prudctName: string, quantity: number, price: number) {
    this._produtName = prudctName;
    this._price = price;
    this._quatity = quantity;
  }

  public toPay() {
    return this._price * this._quatity;
  }
}
