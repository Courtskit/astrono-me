const express = require("express");
const router = express.Router();
const handler = require("./api")

router.get("/", handler)

module.exports = router;