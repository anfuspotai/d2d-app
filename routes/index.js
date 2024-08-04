const express = require("express");
const router = express.Router();
const indexControllers = require("../app/controllers/indexControllers");

router.post("/login/email", indexControllers.loginWithEmail);

module.exports = router;
