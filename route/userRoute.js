const express = require("express");
const { List, Create, Update, Delete, Login } = require("../controller/userController/userController");
const { Auth } = require("../middleware/auth");
const uesrRoute = express.Router();

uesrRoute.get("/list", Auth, List)
uesrRoute.post("/create", Create)
uesrRoute.patch("/update", Update)
uesrRoute.delete("/delete", Delete)
uesrRoute.post("/login", Login)

module.exports = uesrRoute;