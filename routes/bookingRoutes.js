const express = require("express");
const router = express.Router();
const { bookEvent } = require("../controllers/bookingController");

router.post("/", bookEvent);

module.exports = router;