const BaseStrategy = require("../factory/payment-strategy/baseStrategy");

class CreditNote extends BaseStrategy {
  markSuccess() {
    console.log("Mark CN success");
  }

  markFailure() {
    console.log("Mark Cn failure");
  }
}

module.exports = CreditNote;
