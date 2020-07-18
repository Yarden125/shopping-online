const dal = require("../dal/dal");
const Product = require("../models/product-model");

// Get one product:
function getOneProduct(_id) {
    return new Promise((resolve, reject) => {
        Product.find({ _id }).populate("category").exec((err, product) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(product);
        });
    });
}

// Get all products by search word:
function getAllProductsBySearch(search) {
    return new Promise((resolve, reject) => {
        Product.find({ productName: { $regex: search, $options: "i" } }).populate("category").exec((err, products) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(products);
        });
    });
}

// Get all products by category id:
function getAllProductsByCategoryID(_id) {
    return new Promise((resolve, reject) => {
        Product.find({ category: _id }).populate("category").exec((err, products) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(products);
        });
    });
}

// Add product:
function addProduct(product, image) {
    return new Promise((resolve, reject) => {
        product.image = image;
        const addedProduct = new Product(product);
        addedProduct.save((err, addedProduct) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(addedProduct);
        });
    });
}

// Update product:
function updateProduct(product, image) {
    return new Promise((resolve, reject) => {
        product.image = image;
        const updetedProduct = new Product(product);
        Product.updateOne({ _id: product._id }, product, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(updetedProduct);
        });
    });
}

module.exports = {
    getOneProduct,
    getAllProductsBySearch,
    getAllProductsByCategoryID,
    addProduct,
    updateProduct
};