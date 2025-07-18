class NotificationService {
  constructor() {
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter((sub) => sub !== observer);
  }

  notifyAll(data) {
    for (let subscriber of this.subscribers) {
      subscriber.sendNotification(data);
    }
  }

  //   notifyEmail(data) {
  //     this.serviceList.email.sendNotification(data);
  //   }

  //   notifyBySms(data) {
  //     this.serviceList.sms.sendNotification(data);
  //   }

  //   notifyByPush(data) {
  //     this.serviceList.push.sendNotification(data);
  //   }
}

class EmailService {
  sendNotification(data) {
    console.log(`Sending Email to ${data.email}`);
  }
}

class SmsService {
  sendNotification(data) {
    console.log(`Sending Sms to ${data.phoneNumber}`);
  }
}

class PushService {
  sendNotification(data) {
    console.log(`Sending Push Notification  to ${data.userName}`);
  }
}

const notificationService = new NotificationService();

const emailService = new EmailService();
const smsService = new SmsService();
const pushService = new PushService();

notificationService.subscribe(emailService);
notificationService.subscribe(smsService);
notificationService.subscribe(pushService);

notificationService.notifyAll({
  userName: "vish",
  phoneNumber: "1234567891",
  email: "vish@gmail.com",
});

notificationService.unsubscribe(pushService);
notificationService.notifyAll({
  userName: "vish",
  phoneNumber: "1234567891",
  email: "vish@gmail.com",
});
