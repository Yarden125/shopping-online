const dal = require("../dal/dal");
const CartItem = require("../models/cart-item-model");

// Get all cart Items by cart id:
function getAllCartsItemsByCartID(_id) {
    return new Promise((resolve, reject) => {
        CartItem.find({ cart: _id}).populate("cart").populate("product").exec((err, cartsItems) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(cartsItems);
        });
    });
}

// Add cart item:
function addCartItem(cartItem) {
    return new Promise((resolve, reject) => {
        const addedCartItem = new CartItem(cartItem);
        addedCartItem.save((err, addedCartItem) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(addedCartItem);
        });
    });
}

// Delete one cart-item:
function deleteCartItem(_id) {
    return new Promise((resolve, reject) => {
        CartItem.deleteOne({ _id }, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

// Delete all cart-items by cart Id:
function deleteAllCartItems(_id) {
    return new Promise((resolve, reject) => {
        CartItem.deleteMany({cart: _id}, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

module.exports = {
    getAllCartsItemsByCartID,
    addCartItem,
    deleteCartItem,
    deleteAllCartItems
};