const BaseStrategy = require("./baseStrategy");

class CreditCard extends BaseStrategy {
  pay(amount) {
    console.log(`Paying Via Credit Card, Amount: ${amount}`);
  }
}

module.exports = CreditCard;
