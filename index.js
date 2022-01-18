/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');

const app = express();
const port = 3000;
const controller = require('./controller');

app.use(express.json());

app.get('/products/:product_id', controller.getProducts);

app.get('/products', controller.getProducts);

app.get('/products/:product_id/styles', controller.getProductByIdWithStyles);

app.get('/products/:product_id/related', controller.getRelatedProducts);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
