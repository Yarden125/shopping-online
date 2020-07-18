const express = require("express");
const productsLogic = require("../bll/products-logic");
const veryfyLoggedIn = require("../middlewares/verify-logged-in");

const fs = require("fs");
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "assets\\images" });

const router = express.Router();

router.use(veryfyLoggedIn);

// Uploading image and add product:
router.post("/upload-image", upload.single("productImage"), (request, response) => {
    try {
        const fileExtention = path.extname(request.file.originalname);
        const multerFileName = request.file.destination + "\\" + request.file.filename;
        const finalFileName = multerFileName + fileExtention;
        fs.rename(multerFileName, finalFileName, async err => {
            if (err) {
                response.status(500).json(err.message);
                return;
            }
            const addProduct = await productsLogic.addProduct(JSON.parse(request.body.product), `${request.file.filename}${fileExtention}`);
            const addedProduct = await productsLogic.getOneProduct(addProduct);
            response.status(200).json(addedProduct[0]);
        });
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Update image and update product:
router.put("/update-image", upload.single("productImage"), async (request, response) => {
    try {
        if (request.file === undefined) {
            const updateProduct = await productsLogic.updateProduct(JSON.parse(request.body.product), `${request.body.prevImage}`);
            const updatedProduct = await productsLogic.getOneProduct(updateProduct);
            response.status(200).json(updatedProduct[0]);
        }
        else {
            const fileExtention = path.extname(request.file.originalname);
            const multerFileName = request.file.destination + "\\" + request.file.filename;
            const finalFileName = multerFileName + fileExtention;
            fs.rename(multerFileName, finalFileName, async err => {
                if (err) {
                    response.status(500).json(err.message);
                    return;
                }
                const updateProduct = await productsLogic.updateProduct(JSON.parse(request.body.product), `${request.file.filename}${fileExtention}`);
                const updatedProduct = await productsLogic.getOneProduct(updateProduct);
                response.status(200).json(updatedProduct[0]);
            });
            fs.unlink(`./assets/images/${request.body.prevImage}`, (err) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
            });
        }
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;