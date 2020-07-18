const dal = require("../dal/dal");
const City = require("../models/city-model");

// Get all cities:
function getAllCities() {
    return new Promise((resolve, reject) => {
        City.find({ }, null, { sort: { english_name: 1 } }, (err, cities) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(cities);
        });
    });
}

module.exports = {
    getAllCities
};