const express = require("express");
const adminLogic = require("../bll/admin-logic");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Get Admin by login, using post router:
router.post("/login", async (request, response) => {
    try {
        const login = request.body;
        const isAdmin = await adminLogic.isAdmin(login);
        const email = login.email;
        const password = login.password;
        if (email === "" || email === null) {
            errorMessage = `Email is required`;
            response.status(400).json(errorMessage);
            return;
        }
        if (password === "" || password === null) {
            errorMessage = `Password is required`;
            response.status(400).json(errorMessage);
            return;
        }
        if (isAdmin !== 0) {
            const admin = await adminLogic.getAdminFirstName();
            const token = jwt.sign({ admin }, "Chuck-Norris", { expiresIn: "120m" });
            response.json({ admin, token });
        }
        else if (isAdmin === 0) {
            response.json(false);
        }
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Get Admin first name router:
router.get("/", async (request, response) => {
    try {
        const admin = await adminLogic.getAdminFirstName();
        response.json(admin);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;