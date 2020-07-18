const mongoose = require("mongoose");
const adminSchema = require("../schemas/admin-schema");

// Admin Model:
const Admin = mongoose.model("Admin", adminSchema, "admin"); // model, schema, collection

module.exports = Admin;