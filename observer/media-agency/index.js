class MediaAgency {
  constructor() {
    this.subscribers = [];
  }

  subscribe(userName) {
    this.subscribers.push(userName);
  }

  unsubscribe(userName) {
    this.subscribers = this.subscribers.filter((sub) => sub !== userName);
  }

  publish(news) {
    console.log(`New new published: ${news}`);
    this.notify(news);
    // notify to all subscribers
  }

  notify(news) {
    for (let user of this.subscribers) {
      console.log(
        `News has been notified to subscriber: ${user}, news: ${news}`
      );
      //send notification to subscriber
    }
  }
}

const mediaAgency = new MediaAgency();
mediaAgency.subscribe("vish");
mediaAgency.subscribe("man");
mediaAgency.subscribe("raj");
mediaAgency.unsubscribe("vish");
mediaAgency.publish(`It going to rain today`);
mediaAgency.subscribe("vish");
mediaAgency.publish(`It raining heavily`);
