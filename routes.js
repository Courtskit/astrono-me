const express = require("express");
const router = express.Router();
const handler = require("./api")


// router.get("/", function (req, res) {
//   console.log('This is the home page.');
//   res.render("index");
// });

router.get("/", handler)


module.exports = router;