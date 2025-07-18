const EventEmitter = require("events");
//const emitter = EventEmitter();
// now we can use emitter.emit() and emitter.on() or extend and use
//cant be used directly on EventEmitter since its a class

class OrderService extends EventEmitter {
  createOrder(orderData) {
    console.log(`Order created: ${orderData}`);
    this.emit("orderCreated", orderData);
  }
}

class NotificationService {
  notify(orderData) {
    //send mail with orderdata
    console.log(
      `Sending email for orderConfirmation to ${JSON.stringify(
        orderData.email
      )}`
    );
  }
}

class LoggerService {
  log(orderData) {
    //log with orderData
    console.log(`Logging order data ${JSON.stringify(orderData)}`);
  }
}

const orderService = new OrderService();
const notificationService = new NotificationService();
const loggerService = new LoggerService();

//Order matters here, We have to add a listener before creating order
orderService.on("orderCreated", (orderData) => {
  console.log("inside event listen");
  notificationService.notify(orderData);
  loggerService.log(orderData);
});

orderService.createOrder({
  orderId: "123",
  email: "abc@gmail.com",
  price: 100,
});
