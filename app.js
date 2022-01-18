const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(router);

router.get("/", function (req, res) {
  console.log('This is the home page.')
})

app.listen(app.get("port"), function () {
  console.log("Server started on port " + app.get("port"));
})



