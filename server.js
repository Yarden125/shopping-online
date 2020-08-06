const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const path = require("path");

// controllers:
const adminController = require("./controllers/admin-controller");
const categoriesController = require("./controllers/categories-controller");
const productsController = require("./controllers/products-controller");
const cartsController = require("./controllers/carts-controller");
const ordersController = require("./controllers/orders-controller");
const customersController = require("./controllers/customers-controller");
const cartsItemsController = require("./controllers/carts-items-controller");
const citiesController = require("./controllers/cities-controller");
const imagesController = require("./controllers/images-controller");
const countController = require("./controllers/count-controller");
const sanitizeTags = require("./middlewares/sanitize-tags");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.use(sanitizeTags);
app.use("/api/admin", adminController);
app.use("/api/categories", categoriesController);
app.use("/api/products", productsController);
app.use("/api/carts", cartsController);
app.use("/api/orders", ordersController);
app.use("/api/customers", customersController);
app.use("/api/carts-items", cartsItemsController);
app.use("/api/cities", citiesController);
app.use("/api/images", imagesController);
app.use("/api/count", countController);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname , "/client/dist/client-shopping")));
    
    app.get("*", (req,res)=>{
        res.sendFile("client/dist/client-shopping/index.html");
    });
}

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`));