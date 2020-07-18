const express = require("express");
const cartsLogic = require("../bll/carts-logic");
const veryfyLoggedIn = require("../middlewares/verify-logged-in");

const router = express.Router();
router.use(veryfyLoggedIn);

// Get all carts by customer's _id router:
router.get("/:_id", async (request, response) => {
    try {
        const _id = request.params._id;
        const carts = await cartsLogic.getAllCartsByCustomerID(_id);
        response.json(carts);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Get one cart by cartID router:
router.get("/cart-by-cartID/:_id", async (request, response) => {
    try {
        const _id = request.params._id;
        const cart = await cartsLogic.getOneCart(_id);
        response.json(cart);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Add a cart router:
router.post("/", async (request, response) => {
    try {
        const cart = request.body;
        const addedCart = await cartsLogic.addCart(cart);
        response.status(201).json(addedCart);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Update cart status - open: true/false:
router.patch("/:_id", async (request,response) => {
    try{
        const _id = request.params._id;
        const cart = request.body;
        cart._id = _id;
        const updatedCart = await cartsLogic.updateCart(cart);
        response.json(updatedCart);
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

module.exports = router;