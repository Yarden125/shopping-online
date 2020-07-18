const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Cart Schema:
const cartSchema = new Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    date: Date,
    open: Boolean
}, { versionKey: false });

module.exports = cartSchema;