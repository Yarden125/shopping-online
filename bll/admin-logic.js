const dal = require("../dal/dal");
const Admin = require("../models/admin-model");

const hash = require("./hash");

// Get Admin by email and password:
function isAdmin(login) {
    return new Promise((resolve, reject) => {
        login.password = hash(login.password);
        Admin.find({ email: login.email, password: login.password }).countDocuments({}, (err, count) => {
            if (err) {
                reject(err);
                return;
            }
           resolve(count);
        });
    });
}

// Get Admin's email
function getAdminEmail() {
    return new Promise((resolve, reject) => {
        Admin.find({}, (err, admin) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(admin.email);
        });
    });
}

// Get Admin's first name
function getAdminFirstName() {
    return new Promise((resolve, reject) => {
        Admin.find({}, (err, admin) => {
            if (err) {
                reject(err);
                return;
            }
            const admin2 = {_id: admin[0]._id , firstName: admin[0].firstName};
            resolve(admin2);
        });
    });
}

module.exports = {
    isAdmin,
    getAdminEmail,
    getAdminFirstName
};

