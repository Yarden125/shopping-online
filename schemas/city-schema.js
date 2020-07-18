const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// City Schema:
const citySchema = new Schema({
    english_name : String,
}, { versionKey: false });

module.exports = citySchema;