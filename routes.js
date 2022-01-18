const express = require("express");
const router = express.Router();


router.get("/", function (req, res) {
  console.log('This is the home page.');
  res.render("index");
});


module.exports = router;