const express = require("express");
const databaseConnection = require("./database");
const bookRouter = require("./routes/book.route");
const userRouter = require("./routes/user.route");
const authMiddleWare = require("./middleware/user.middleware");
const cors = require("cors");

databaseConnection();
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hellow guys");
});

// www.google.com/book Or user
app.use("/book", authMiddleWare, bookRouter);
app.use("/user", userRouter);

app.listen(8000, () => {
  console.log("Port is listening on 8000");
});
