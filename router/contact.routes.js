const express = require("express");
const { sendMessage } = require("../controller/Contact.controller");

const router = express.Router();

router.post("/send-message", sendMessage);

module.exports = router;
