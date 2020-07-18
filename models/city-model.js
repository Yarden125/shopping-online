const mongoose = require("mongoose");
const citySchema = require("../schemas/city-schema");

// City Model:
const City = mongoose.model("City", citySchema, "cities");

module.exports = City;