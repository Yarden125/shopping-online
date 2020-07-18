const mongoose = require("mongoose");
const categorySchema = require("../schemas/category-schema");

// Category Model:
const Category = mongoose.model("Category", categorySchema, "categories");

module.exports = Category;