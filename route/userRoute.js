const express = require("express");
const { List, Create, Update, Delete } = require("../controller/userController/userController");
const uesrRoute = express.Router();

uesrRoute.get("/list", List)
uesrRoute.post("/create", Create)
uesrRoute.patch("/update", Update)
uesrRoute.delete("/delete", Delete)

module.exports = uesrRoute;