const mongoose = require("mongoose");
const cartItemSchema = require("../schemas/cart-item-schema");

// Cart Item Model:
const CartItem = mongoose.model("CartItem", cartItemSchema, "cartItems");

module.exports = CartItem;