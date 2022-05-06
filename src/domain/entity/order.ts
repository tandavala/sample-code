import OrderItem from "./order-item";

export default class Order {
  private _id: number;
  private _items: OrderItem[];

  constructor(id: number, items: OrderItem[]) {
    this._id = id;
    this._items = items;
  }

  public items() {
    return this._items;
  }

  public totalToPay() {
    return this._items.reduce((acc, item) => acc + item.toPay(), 0);
  }
}
