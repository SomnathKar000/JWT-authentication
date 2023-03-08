const express = require("express");
const { loginData, dashbord } = require("../controllers/main");
const auth = require("../middleware/auth");

const routes = express.Router();

routes.route("/login").post(loginData);
routes.route("/dashbord").get(auth, dashbord);

module.exports = routes;
