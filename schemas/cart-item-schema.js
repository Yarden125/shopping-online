const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Cart Item Schema:
const cartItemSchema = new Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    price: Number,
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" }
}, { versionKey: false });

module.exports = cartItemSchema;