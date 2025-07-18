//dynamic strategy; mostly this wont be used static strategy simliar to paymet is uesd and
//for bill asell
class RazorPay {
  pay(amount) {
    console.log(`Payment Via Razorpay, Amount: ${amount}`);
  }
}

class Stripe {
  pay(amount) {
    console.log(`Payment Via Stripe, Amount: ${amount}`);
  }
}

class PaymentStrategy {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  processPayment(amount) {
    this.strategy.pay(amount);
  }
}

const payment = new PaymentStrategy(new RazorPay());
payment.processPayment(150);

payment.setStrategy(new Stripe());
payment.processPayment(200);
