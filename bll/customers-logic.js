const dal = require("../dal/dal");
const Customer = require("../models/customer-model");
const hash = require("./hash");

// Get customer by login:
function getCustomerByLogin(login) {
    return new Promise((resolve, reject) => {
        login.password = hash(login.password);
        Customer.findOne({ email: login.email, password: login.password }, (err, customer) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(customer);
        });
    });
}

// Get customer by _id:
function getCustomerByID(_id) {
    return new Promise((resolve, reject) => {
        Customer.findOne({ _id }, (err, customer) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(customer);
        });
    });
}

// Add customer (when register):
function addCustomer(customer) {
    return new Promise((resolve, reject) => {
        customer.password = hash(customer.password)
        const addedCustomer = new Customer(customer);
        addedCustomer.save((err, addedCustomer) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(addedCustomer);
        });
    });
}

// Check if customer email exists:
function isCustomerExists(email) {
    return new Promise((resolve, reject) => {
        Customer.findOne({ email }, (err, email) => {
            if (err) {
                reject(err);
                return;
            }
            if (email === null) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    });
}

// Update "customer.newCustomer" to false:
function updateCustomer(customer) {
    return new Promise((resolve, reject) => {
        const updatedCustomer = new Customer(customer);
        Customer.updateOne({ _id: customer._id }, { $set: { "newCustomer": false }}, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(updatedCustomer);
        });
    });
}

module.exports = {
    getCustomerByLogin,
    getCustomerByID,
    addCustomer,
    isCustomerExists,
    updateCustomer
};