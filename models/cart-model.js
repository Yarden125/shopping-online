const mongoose = require("mongoose");
const cartSchema = require("../schemas/cart-schema");

// Cart Model:
const Cart = mongoose.model("Cart", cartSchema, "carts");

module.exports = Cart;