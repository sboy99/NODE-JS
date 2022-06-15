// MiddleWire..
const express = require("express");
const { products } = require("./data");
const { authorize } = require("./middlewire/authorize");
const { logger } = require("./middlewire/logger");
const app = express();
//using Multiple middleware
app.use([logger, authorize]);
app.get("/", (req, res) => {
  res.status(200).send("Home Page");
  console.log(req.user); //req.user is set in authorize middleware..
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.all("*", (req, res) => {
  res.status(404).send("<h1>File Not Found..</h1>");
});

app.listen(5000, () => {
  console.log("Port: 5000..");
});
