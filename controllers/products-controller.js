const express = require("express");
const productsLogic = require("../bll/products-logic");
const veryfyLoggedIn = require("../middlewares/verify-logged-in");

const router = express.Router();
router.use(veryfyLoggedIn);

// Get all products by search router:
router.get("/products-by-search/:search", async (request, response) => {
    try {
        const search = request.params.search;
        const products = await productsLogic.getAllProductsBySearch(search);
        response.json(products);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Get all products by category:
router.get("/products-by-category/:_id", async (request, response) => {
    try {
        const _id = request.params._id;
        const products = await productsLogic.getAllProductsByCategoryID(_id);
        response.json(products);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;