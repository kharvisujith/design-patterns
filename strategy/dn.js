const BaseStrategy = require("../factory/payment-strategy/baseStrategy");

class DebitNote extends BaseStrategy {
  markSuccess() {
    console.log("Mark DN success");
  }

  markFailure() {
    console.log("Mark DN failure");
  }
}

module.exports = DebitNote;
