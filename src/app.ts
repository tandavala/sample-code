import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order-item";
import BitCointPayment from "./infraestruture/service/bitcoint.service";
import PaypalPayment from "./infraestruture/service/paypal.service";
import StripePayment from "./infraestruture/service/stripe.service";

const orderItem1 = new OrderItem("product # 1", 10, 1);
const orderItem2 = new OrderItem("product # 1", 10, 2);

const order = new Order(1, [orderItem1, orderItem2]);

// Total a pagar: 30
console.log(order.totalToPay());

// Fazendo pagamento usando o gateway paypal
const payPalConf = {
  user: "paypal.user",
  pass: "paypal.pass",
};
const payPalPayment = new PaypalPayment(payPalConf);

console.log(payPalPayment.addPayment(order.totalToPay(), 30));

// Fazendo o pagamento usando o stripe
const stripeConf = {
  user: "stripe.user",
  pass: "stripe.pass",
};

const stripePayment = new StripePayment(stripeConf);
console.log(stripePayment.addPayment(order.totalToPay(), 30));

// Fazendo Pagamento usando bitcoin

const whateverBitCointGateWayConfig = {
  user: "btn.user",
  pass: "btn.pass",
};

const whateverBitCointGateWay = new BitCointPayment(
  whateverBitCointGateWayConfig
);
console.log(whateverBitCointGateWay.addPayment(order.totalToPay(), 30));
