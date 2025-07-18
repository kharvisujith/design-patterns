const RazorPay = require("../payment-strategy/razorpay");
const Stripe = require("../payment-strategy/stripe");
const CreditCard = require("../payment-strategy/credit-crad");

class PaymentFactory {
  constructor() {
    this.paymentStrategies = {
      raz: RazorPay,
      stripe: Stripe,
      "credit-card": CreditCard,
    };
  }
  getPaymentMode(type) {
    // switch (type) {
    //   case "raz":
    //     return new RazorPay();
    //   case "stripe":
    //     return new Stripe();
    //   case "credit-card":
    //     return new CreditCard();
    //   default:
    //     throw new Error("Invalid payment type");
    // }
    const strategyClass = this.paymentStrategies[type];
    if (!strategyClass) throw new Error("Invalid payment type");
    return new strategyClass();
  }
}

module.exports = PaymentFactory;
