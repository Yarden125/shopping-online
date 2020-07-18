const mongoose = require("mongoose");

// Connect to database:
const connection = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/OnlineShoppingDB",
    { useNewUrlParser: true, useUnifiedTopology: true }, (err, mongoClient) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("We're connected to " + mongoClient.name + " database...");
    });

module.exports = connection;