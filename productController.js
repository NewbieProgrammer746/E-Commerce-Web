const Product = require('../models/Product');

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const getFeaturedProducts = async (req, res) => {
  const featuredProducts = await Product.find().limit(5);
  res.json(featuredProducts);
};

module.exports = { getProducts, getFeaturedProducts };
