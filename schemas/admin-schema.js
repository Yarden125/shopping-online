const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Admin Schema:
const adminSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
}, { versionKey: false });

module.exports = adminSchema;