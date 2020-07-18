const dal = require("../dal/dal");
const Cart = require("../models/cart-model");

// Get one cart by cartID:
function getOneCart(_id) {
    return new Promise((resolve, reject) => {
        Cart.findOne({ _id  }).populate("customer").exec((err, cart) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(cart);
        });
    });
}

// Get all customer's carts by cutomer's id:
function getAllCartsByCustomerID(_id) {
    return new Promise((resolve, reject) => {
        Cart.find({ customer: _id }, (err, carts) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(carts);
        });
    });
}

// Add a cart:
function addCart(cart) {
    return new Promise((resolve, reject) => {
        const addedcart = new Cart(cart);
        addedcart.save((err, addedcart) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(addedcart);
        });
    });
}

// Update cart status open/closed:
function updateCart(cart){
    return new Promise((resolve, reject)=>{
        const updatedCart = new Cart(cart);
        Cart.updateOne({_id: cart._id}, cart, (err, info) =>{
            if(err){
                reject(err);
                return;
            }
            resolve(updatedCart);
        });
    });
}

module.exports = {
    getOneCart,
    getAllCartsByCustomerID,
    addCart,
    updateCart
};