const BaseStrategy = require("../factory/payment-strategy/baseStrategy");

class Bill extends BaseStrategy {
  markSuccess() {
    console.log("Mark Bill success");
  }
  markFailure() {
    console.log("Mark Bill Failure");
  }
}

module.exports = Bill;
