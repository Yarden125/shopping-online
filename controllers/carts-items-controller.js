const express = require("express");
const cartsItemsLogic = require("../bll/carts-items-logic");
const veryfyLoggedIn = require("../middlewares/verify-logged-in");

const router = express.Router();

router.use(veryfyLoggedIn);

// Get all cart Items by cartID router:
router.get("/cartID/:_id", async (request,response)=>{
    try{
        const _id = request.params._id
        const cartsItems = await cartsItemsLogic.getAllCartsItemsByCartID(_id);
        response.json(cartsItems);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Add cart item router:
router.post("/", async (request,response)=>{
    try{
        const cartItem = request.body;
        const addedCartItem = await cartsItemsLogic.addCartItem(cartItem);
        response.status(201).json(addedCartItem);
    }
    catch(err){
        response.status(500).send(err.message);
    }
});

// Delete one cart item router:
router.delete("/:_id", async (request,response)=>{
    try{    
        const _id = request.params._id;
        await cartsItemsLogic.deleteCartItem(_id);
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Delete all cart items router:
router.delete("/delete-by-cartID/:_id", async (request,response)=>{
    try{    
        const _id = request.params._id;
        await cartsItemsLogic.deleteAllCartItems(_id);
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;