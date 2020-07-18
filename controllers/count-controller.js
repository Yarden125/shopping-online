const express = require("express");
const countLogic = require("../bll/count-logic");

const router = express.Router();

// Count number of orders router:
router.get("/count-orders", async (request,response)=>{
    try{
        const count = await countLogic.countNumberOfOrders();
        response.json(count);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Get router- count all products:
router.get("/count-products", async (request, response) => {
    try {
        const count = await countLogic.countNumberOfProducts();
        response.json(count);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;