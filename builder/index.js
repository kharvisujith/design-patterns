//to build a complex object step by step , when lot of optional fields are present
// so user object with multiple optional parameter

class User {
  constructor(name, email, age, place, isPremium, phone) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.place = place;
    this.isPremium = isPremium;
    this.phone = phone;
  }
}

class UserBuilder {
  constructor() {
    this.name = null;
    this.email = null;
    this.age = null;
    this.place = null;
    this.isPremium = false;
    this.phone = null;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setPlace(place) {
    this.place = place;
    return this;
  }

  setIsPremium(isPremium) {
    this.isPremium = isPremium;
    return this;
  }

  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  build() {
    if (!this.name) throw new Error("Name is mandatory");
    return new User(
      this.name,
      this.email,
      this.age,
      this.place,
      this.isPremium,
      this.phone
    );
  }
}

//need to remember the order -> complicated if ther are optons so use builder patter.
const user1 = new User("vish", "agc@gmail.com", 10, "bhat", true, "123");
const user2 = new User("vish", null, 10, null, true, null);

const user3 = new UserBuilder()
  .setName("man")
  .setAge(10)
  .setEmail("keek@gmail.com")
  .setIsPremium(true)
  .build();
console.log(user3);

const user4 = new UserBuilder().setAge(22).build();
console.log(user4);
