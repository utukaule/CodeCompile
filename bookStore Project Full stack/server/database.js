const mongoose = require("mongoose");

const databaseConnection = async () => {
  mongoose
    .connect("mongodb+srv://book:books@cluster0.wikr5un.mongodb.net/")
    .then(() => {
      console.log("connected to database successfully...");
    })
    .catch((err) => {
      console.log("database connection field ", err);
    });
};

module.exports = databaseConnection;
