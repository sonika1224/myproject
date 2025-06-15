const express = require("express");
const router = express.Router();
const { loginUser } = require("D:/ecommerce/backend/controllers/authcontroller.js");

router.post("/login", loginUser);

module.exports = router;
