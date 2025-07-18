// what object to create
class PaymentFactory {
  constructor() {}
  getPaymentMode(type) {
    switch (type) {
      case "raz":
        return new Razorpay();
      case "stripe":
        return new Stripe();
      case "credit-card":
        return new CreditCard();
      default:
        throw new Error("Invalid payment type");
    }
  }
}

class Razorpay {
  pay(amount) {
    console.log(`Paying Via: RazorPay, amount: ${amount}`);
  }
}

class Stripe {
  pay(amount) {
    console.log(`Paying Via: RazorPay, amount: ${amount}`);
  }
}

class CreditCard {
  pay(amount) {
    console.log(`Paying Via: RazorPay, amount: ${amount}`);
  }
}

const factory = new PaymentFactory();
amount = 100;
const payment1 = factory.getPaymentMode("raz");
console.log(payment1);
payment1.pay(1);
const payment2 = factory.getPaymentMode("stripe");
console.log(payment2);
payment2.pay(2);

const payment3 = factory.getPaymentMode("credit-card");
console.log(payment3);
payment3.pay(3);