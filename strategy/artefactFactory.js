const Bill = require("./bill");
const CreditNote = require("./cn");
const DebitNote = require("./dn");

class ArtefactFactory {
  constructor() {
    this.strategies = {
      bill: Bill,
      cn: CreditNote,
      dn: DebitNote,
    };
    //use this if the classes are stateless -> no metadata passed during instantiation
    // this.strategies = {
    //   bill: new Bill(),
    //   cn: new CreditNote(),
    //   dn: new DebitNote(),
    // };
  }
  getStrategy(type) {
    const strategyClass = this.strategies[type];
    // const strategy = this.strategies[type];
    if (!strategyClass) throw new Error("Invalid artefact type");
    return new strategyClass(metaData);
    // return strategy;

    //here we can avoid a switchcase for better maintainability
    // switch (type) {
    //   case "bill":
    //     return new Bill();
    //   case "cn":
    //     return new CreditNote();
    //   case "dn":
    //     return new DebitNote();
    //   default:
    //     throw new Error("Invalid artefact type");
    // }
  }
}

module.exports = ArtefactFactory;
