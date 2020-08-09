const express = require("express");
const customersLogic = require("../bll/customers-logic");
const adminLogic = require("../bll/admin-logic");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "Chuck-Norris";

const router = express.Router();

// Get customer by id router:
router.get("/:_id", async (request, response) => {
    try {
        const _id = request.params._id;
        const customer = await customersLogic.getCustomerByID(_id);
        customer.password = "";
        response.json(customer);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Get customer with login post router:
router.post("/login", async (request, response) => {
    try {
        const login = request.body;
        const email = login.email;
        const password = login.password;
        if (email === "" || null) {
            errorMessage = `Email is required`;
            response.status(400).json(errorMessage);
            return;
        }
        if (password === "" || null) {
            errorMessage = `Password is required`;
            response.status(400).json(errorMessage);
            return;
        }
        else {
            const customer = await customersLogic.getCustomerByLogin(login);
            if (customer !== null) {
                const token = jwt.sign({ customer }, secret, { expiresIn: "120m" });
                customer.password = "";
                response.json({ customer, token });
            }
            else {
                response.json(false);
            }
        }
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Add customer router:
router.post("/register", async (request, response) => {
    try {
        const customer = request.body;
        const email = request.body.email;
        const firstName = request.body.firstName;
        const lastName = request.body.lastName;
        const password = request.body.password;
        const phone = request.body.phone;
        const city = request.body.city;
        const street = request.body.street;
        const houseNumber = request.body.houseNumber;
        const adminEmail = await adminLogic.getAdminEmail();
        const isEmailExists = await customersLogic.isCustomerExists(email);
        let errorMessage = "";

        if (email === adminEmail || isEmailExists === true) {
            response.json(false);
        }
        else {
            if (firstName === "" || firstName === null) {
                errorMessage = "Missing first name";
                response.status(400).json(errorMessage);
                return;
            }
            if (firstName.length < 2) {
                errorMessage = "First name must have at least 2 letters";
                response.status(400).json(errorMessage);
                return;
            }
            if (!(/^[a-zA-Z\s\-]*$/).test(firstName)) {
                errorMessage = `1. Only letters and dashes are allowed`;
                response.status(400).json(errorMessage);
                return;
            }
            if (lastName === "" || lastName === null) {
                errorMessage = "Missing last name";
                response.status(400).json(errorMessage);
                return;
            }
            if (lastName.length < 2) {
                errorMessage = "Last name must have at least 2 letters";
                response.status(400).json(errorMessage);
                return;
            }
            if (!(/^[a-zA-Z\s\-]*$/).test(lastName)) {
                errorMessage = `Only letters and dashes "-" are allowed`;
                response.status(400).json(errorMessage);
                return;
            }
            if (email === "" || email === null) {
                errorMessage = "Missing email";
                response.status(400).json(errorMessage);
                return;
            }
            if (!(/^([a-z]|\d)+([_]|[-]|[a-z]|\d)*@([a-z]|\d)+([_]|[-]|[a-z]|\d)*\.[a-z]{2,3}((\.)([a-z]{2,3}))?$/).test(email)) {
                errorMessage = `Email is not valid`;
                response.status(400).json(errorMessage);
                return;
            }
            if (password === "" || password === null) {
                errorMessage = "Missing password";
                response.status(400).json(errorMessage);
                return;
            }
            if (password.length < 6) {
                errorMessage = "Password must have at least 6 digits";
                response.status(400).json(errorMessage);
                return;
            }
            if (!(/^[a-zA-Z0-9!@#$%^&*()_\+\-\=[\][?]+$/).test(password)) {
                errorMessage = `Only letters,number, and !@#$%^&*()_-+=\? are allowed`;
                response.status(400).json(errorMessage);
                return;
            }
            if (phone === "" || phone === null) {
                errorMessage = "Missing phone";
                response.status(400).json(errorMessage);
                return;
            }
            if (!(/^0[2345789]\d?[-]?\d{7}$/).test(phone)) {
                errorMessage = `Phone must start with 0 and contain between 9-10 digits <br> No letters are allowed`;
                response.status(400).json(errorMessage);
                return;
            }
            if (city === "" || city === null) {
                errorMessage = `City is required`;
                response.status(400).json(errorMessage);
                return;
            }
            if (houseNumber === "" || houseNumber === null) {
                errorMessage = `House number is required`;
                response.status(400).json(errorMessage);
                return;
            }
            if (!(/^[0-9]+$/).test(houseNumber)) {
                errorMessage = `Only numbers are allowed`;
                response.status(400).json(errorMessage);
                return;
            }
            if (houseNumber === 0) {
                errorMessage = `Zero alone can't be a house number`;
                response.status(400).json(errorMessage);
                return;
            }
            if (street === "" || street === null) {
                errorMessage = `Street name is required`;
                response.status(400).json(errorMessage);
                return;
            }
            if (street.length < 2) {
                errorMessage = "Street name must contain at least 2 letters";
                response.status(400).json(errorMessage);
                return;
            }
            if (!(/^[a-zA-Z\s\-]*$/).test(street)) {
                errorMessage = `Only letters and dash "-" are allowed`;
                response.status(400).json(errorMessage);
                return;
            }
            if (errorMessage === "") {
                const addedCustomer = await customersLogic.addCustomer(customer);
                const token = jwt.sign({ addedCustomer }, secret, { expiresIn: "120m" });
                addedCustomer.password = "";
                response.status(201).json({ addedCustomer, token });
            }
            else{
                response.json(false);
            }
        }
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Update "customer.newCustomer" status to false:
router.patch("/:_id", async (request, response) => {
    try {
        const _id = request.params._id;
        const customer = request.body;
        customer._id = _id;
        const updatedCustomer = await customersLogic.updateCustomer(customer);
        updatedCustomer.password = "";
        response.json(updatedCustomer);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;