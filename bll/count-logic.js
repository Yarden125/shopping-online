const dal = require("../dal/dal");
const Order = require("../models/order-model");
const Product = require("../models/product-model");

// Count - number of orders made on the website:
function countNumberOfOrders() {
    return new Promise((resolve, reject) => {
        Order.countDocuments({}, (err, count) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(count);
        });
    });
}

// count - number of products available on the website:
function countNumberOfProducts() {
    return new Promise((resolve, reject) => {
        Product.countDocuments({}, (err, count) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(count);
        });
    });
}

module.exports = {
    countNumberOfOrders,
    countNumberOfProducts
};