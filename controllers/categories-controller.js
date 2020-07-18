const express = require("express");
const categoriesLogic = require("../bll/categories-logic");
const veryfyLoggedIn = require("../middlewares/verify-logged-in");

const router = express.Router();
router.use(veryfyLoggedIn);

// Get all categories:
router.get("/", async (request,response)=>{
    try{
        const categories = await categoriesLogic.getAllCategories();
        response.json(categories);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;