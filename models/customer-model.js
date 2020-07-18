const mongoose = require("mongoose");
const customerSchema = require("../schemas/customer-schema");

// Customer Model:
const Customer = mongoose.model("Customer", customerSchema, "customers");

module.exports = Customer;