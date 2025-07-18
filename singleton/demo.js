class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.date = new Date();
  }
}

const obj1 = new Singleton();
const obj2 = new Singleton();
console.log(obj1 === obj2);
console.log(obj1.date, obj2.date);
