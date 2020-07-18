const mongoose = require("mongoose");
const productSchema = require("../schemas/product-schema");

// Product Model:
const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;