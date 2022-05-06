import Order from "../entity/order";

// estou criando essa classs mas não vou usar é só para exemplificar
export default class OrderFactory {
  async placeOrder(id: number, items: []) {
    return new Order(id, items);
  }
}
