const express = require("express");
const ordersLogic = require("../bll/orders-logic");
const veryfyLoggedIn = require("../middlewares/verify-logged-in");

const router = express.Router();
router.use(veryfyLoggedIn);

// Get customer's latest order router:
router.get("/latest-order/:_id", async (request,response)=>{
    try{
        const _id = request.params._id;
        const order = await ordersLogic.getCustomerLatestOrder(_id);
        response.json(order);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Add order router:
router.post("/", async (request,response)=>{
    try {
        const order = request.body;
        const addedOrder = await ordersLogic.addOrder(order);
        response.status(201).json(addedOrder);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;