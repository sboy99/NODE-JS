//sesending specific Json instead of sending whole...
const { products } = require("./data");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send('<h1>Home Page..</h1>    <a href="/api/products">Products</a>');
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, title, company } = product;
    return { id, title, company };
  });
  res.json(newProducts);
});
//Getting Desired single Product..
app.get("/api/products/:company", (req, res) => {
  //Finding By Company Name
  const singleProduct = products.find(
    (product) => product.company === req.params.company.toUpperCase()
  );
  !singleProduct
    ? res.status(404).send(`can't find ${req.params.company}`)
    : res.json(singleProduct);
});
//////////////////////////////////////
app.all("*", (req, res) => {
  res.status(404).send("<h1>File Not Found..</h1>");
});
app.listen(5000, () => {
  console.log(`Listening to 5000...`);
});
