const express = require("express");
const app = express();
const { db, DatabaseConnection } = require("./db");
const { default: mongoose } = require("mongoose");
const PORT =
  process.env.PROT ||
  4000(async () => {
    try {
      const conn2 = new DatabaseConnection();
      const conn3 = new DatabaseConnection();
      console.log(conn2 === conn3);
      await db.connect();
      await db.connect();
      app.get("/health", (req, res) => {
        const result = {
          message: "Server is running and up",
          dbConnection:
            mongoose.connection.readyState === 1 ? "Connected" : "DisConnected",
        };
        res.send(result);
      });
      app.listen(PORT, () => {
        console.log(`Listening to PORT: ${PORT}`);
      });
    } catch {
      console.log("❌ Failed to connect to MongoDB:", err.message);
      process.exit(0);
    }
  })();

  //NODE_ENV=localDevelopment NODE_PATH=. nodemon singleton/index.js
