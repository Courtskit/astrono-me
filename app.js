const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");


app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(routes);
app.use(express.static("./public"));
app.use("/css",express.static(__dirname+"public/css"));


app.listen(app.get("port"), function () {
  console.log("Server started on port " + app.get("port"));
})



