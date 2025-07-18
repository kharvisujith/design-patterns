

//factory is used with strategy, factory gives the object each object will have its own strategy.
const PaymentFactory = require('./payment-factory/index')
const factory = new PaymentFactory();

const raz = factory.getPaymentMode('raz')
const stripe = factory.getPaymentMode('stripe');
const cc = factory.getPaymentMode('credit-card')

raz.pay(100);
raz.pay(150)
stripe.pay(200);
cc.pay(300)
cc.pay(400)


