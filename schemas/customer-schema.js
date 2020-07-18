const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Customer Schema:
const customerSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    city: String,
    street: String,
    houseNumber: Number,
    newCustomer: Boolean,
}, { versionKey: false });

module.exports = customerSchema;