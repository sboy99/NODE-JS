//Sending JSON[Java Script Object Notation]
const { products } = require("./data");
const express = require("express");
const app = express();
app.use(express.static("assets"));
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.listen(5000, () => {
  `Listening to 5000...`;
});
