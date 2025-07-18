const ArtefactFactory = require("./artefactFactory");

const factory = new ArtefactFactory();

const bill = factory.getStrategy("bill");
bill.markSuccess();
bill.markFailure();

const cn = factory.getStrategy("cn");
cn.markSuccess();
cn.markFailure();

const dn = factory.getStrategy("dn");
dn.markSuccess();
dn.markFailure();
