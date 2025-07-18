const BaseStrategy = require("./baseStrategy");

class RazorPay extends BaseStrategy {
  pay(amount) {
    console.log(`Paying Via RazorPay, Amount: ${amount}`);
  }
}

module.exports = RazorPay;
