const dal = require("../dal/dal");
const Category = require("../models/category-model");

// Get all categories:
function getAllCategories() {
    return new Promise((resolve, reject) => {
        Category.find({}, (err, categories) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(categories);
        });
    });
}

module.exports = {
    getAllCategories
};