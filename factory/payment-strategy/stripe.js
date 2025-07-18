const BaseStrategy = require("./baseStrategy");

class Stripe extends BaseStrategy {
  pay(amount) {
    console.log(`Paying Via  Stripe, Amount: ${amount}`);
  }
}

module.exports = Stripe;
