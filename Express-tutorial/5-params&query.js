const { json } = require("body-parser");
const express = require("express");
const app = express();
const { products } = require("./data");

// request for home page
app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

// setup for the products link
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

// setup for single product in products link
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.status(404).send("Product does not exist!");
  }
  return res.json(singleProduct);
});

// query parameters setup
// http://localhost:5000/api/v1/query?search=a&limit=1
// use the above link to test
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  // searching for a specific product
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  // setting limit for the number of products to be shown
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).send("no product matched your search");
  }
  return res.status(200).json(sortedProducts);
});

// defining the port number
app.listen(5000, () => {
  console.log("listening on port 5000");
});
