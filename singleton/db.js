const mongoose = require("mongoose");
const config = require("config");

class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    DatabaseConnection.instance = this;
    this.connected = false;
  }

  async connect() {
    if (this.connected) {
      return;
    }
    try {
      const url = config.get("db.url");
      await mongoose.connect(url, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      });
      this.connected = true;
    } catch (error) {
      console.log(`Error connecting to mongodb`, error);
      this.connected = false;
      throw new Error(error);
    }
  }

  async disconnect() {
    await mongoose.disconnect().then(() => {
      console.log("🔌 Disconnected from MongoDB");
    });
  }
}

module.exports = {
  db: new DatabaseConnection(),
  DatabaseConnection,
};
