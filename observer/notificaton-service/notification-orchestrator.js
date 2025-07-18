class NotificationService {
  constructor() {
    // this.subscribers = [];
    this.serviceList = {
      email: new EmailService(),
      sms: new SmsService(),
      push: new PushService(),
    };
  }

  notifyByAll(data) {
    // for (let subscriber of this.subscribers) {
    //   this.serviceList.email.sendNotification({ subscriber, ...data });
    //   this.serviceList.sms.sendNotification({ subscriber, ...data });
    //   this.serviceList.push.sendNotification({ subscriber, ...data });
    // }
    this.serviceList.email.sendNotification(data);
    this.serviceList.sms.sendNotification(data);
    this.serviceList.push.sendNotification(data);
  }

  notifyEmail(data) {
    this.serviceList.email.sendNotification(data);
  }

  notifyBySms(data) {
    this.serviceList.sms.sendNotification(data);
  }

  notifyByPush(data) {
    this.serviceList.push.sendNotification(data);
  }
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

notificationService.notifyByAll({
  userName: "vish",
  phoneNumber: "1234567891",
  email: "vish@gmail.com",
});

notificationService.notifyEmail({
  userName: "vish",
  phoneNumber: "1234567891",
  email: "vish@gmail.com",
});

notificationService.notifyBySms({
  userName: "vish",
  phoneNumber: "1234567891",
  email: "vish@gmail.com",
});

notificationService.notifyByPush({
  userName: "vish",
  phoneNumber: "1234567891",
  email: "vish@gmail.com",
});
