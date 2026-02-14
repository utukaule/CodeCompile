const mongoose = require("mongoose");

const databaseConnection = async () => {
  mongoose
    .connect()
    .then(() => {
      console.log("connected to database successfully...");
    })
    .catch((err) => {
      console.log("database connection field ", err);
    });
};

module.exports = databaseConnection;
