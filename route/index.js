const express = require("express");
const route = express();

route.use("/user", require("./userRoute"));

module.exports = route;