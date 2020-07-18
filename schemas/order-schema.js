const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Oreder Schema:
const orderSchema = new Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    price: Number,
    city: String,
    street: String,
    deliveryDate: Date,
    orderDate: Date,
    cc: Number // credit card number
}, { versionKey: false });

module.exports = orderSchema;