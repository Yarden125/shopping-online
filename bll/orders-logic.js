const dal = require("../dal/dal");
const Order = require("../models/order-model");

// Get customer's latest order:
function getCustomerLatestOrder(_id) {
    return new Promise((resolve, reject) => {
        Order.findOne({customer : _id}).sort({ orderDate: -1 }).populate("customer").populate("cart").exec((err, order) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(order);
        });
    });
}

// Add order:
function addOrder(order) {
    // not saving the real data the client will enter - only a demo
    order.cc = 0;
    return new Promise((resolve, reject) => {
        const addedOrder = new Order(order);
        addedOrder.save((err, addedOrder) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(addedOrder);
        });
    });
}

module.exports = {
    getCustomerLatestOrder,
    addOrder
};