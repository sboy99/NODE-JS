/**
 *  Params with extra info..
 */
const express = require("express");
const path = require("path");
const { products } = require("./data");
const app = express();
app.use("/", express.static(path.resolve(__dirname, "assets")));
app.get("/api/products", (req, res) => {
  res.send(products);
});
app.get("/api/products/:id", (req, res) => {
  const newProduct = products.find((product) => product.id === req.params.id);
  newProduct
    ? res.status(200).json(newProduct)
    : res.status(404).send(`Can't find...`);
});
app.get("/api/products/:id/:name/:age", (req, res) => {
  console.log(req.params);
  res.json(req.params);
});
//Query...
app.get("/api/items/query", (req, res) => {
  try {
    const { name, limit } = req.query;
    let filteredProducts = [...products];
    if (!name && !limit) {
      res.json(filteredProducts);
    }
    name &&
      (filteredProducts = filteredProducts.filter((product) =>
        product.name.match(name)
      ));
    limit && (filteredProducts = filteredProducts.slice(0, Number(limit)));
    // filteredProducts.length > 0
    //   ? res.json(filteredProducts)
    //   : res.status(404).send("Sorry, No matches Found...");
    res.json({
      status: "success",
      data: filteredProducts,
    });
  } catch (error) {
    res.json({
      status: "failure",
    });
  }
});

app.listen(5000, () => {
  console.log(`Port: 5000...`);
});
