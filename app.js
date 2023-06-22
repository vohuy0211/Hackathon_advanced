const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(express.static("public"));

const indexUsers = path.join(__dirname, "./Public/index.html");
const userPoints = path.join(__dirname, "./Public/userPoint.html");
const userRouter = require("./Router/user.router");

console.log(userPoints);

// console.log(indexUsers);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).sendFile(indexUsers);
});
app.get("/rounds/:id", (req, res) => {
  return res.status(200).sendFile(userPoints);
});

app.use("/api/rounds", userRouter);

const port = 4040;
app.listen(port, () => {
  console.log(`Server Express running at http://localhost:${port}`);
});
