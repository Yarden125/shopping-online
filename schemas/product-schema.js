const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Product Schema:
const productSchema = new Schema({
    productName: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    price: Number,
    image: String
}, { versionKey: false });

module.exports = productSchema;