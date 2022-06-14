const express = require("express");
const app = express();
//Sending all data to the client site while hit on server..
app.use(express.static("assets"));
app.all("*", (req, res) => {
  res.status(404).send("<h1> File not Found </h1>");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Port:${port}...`);
});
