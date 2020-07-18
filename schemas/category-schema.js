const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Category Schema:
const categorySchema = new Schema({
    category: String
}, { versionKey: false });

module.exports = categorySchema;