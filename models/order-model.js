const mongoose = require("mongoose");
const orderSchema = require("../schemas/order-schema");

// Order Model:
const Order = mongoose.model("Order", orderSchema, "orders");

module.exports = Order;