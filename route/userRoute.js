const express = require("express");
const uesrRoute = express.Router();

uesrRoute.get("/list", (req, res)=>{
    return res.status(200).json({
        message:"any message",
        data:"any data",
        status: 200
    })
})
uesrRoute.post("/create", (req, res)=>{
    return res.status(200).json({
        message:"any message",
        data:"any data",
        status: 200
    })
})
uesrRoute.patch("/update", (req, res)=>{
    return res.status(200).json({
        message:"any message",
        data:"any data",
        status: 200
    })
})
uesrRoute.delete("/delete", (req, res)=>{
    return res.status(200).json({
        message:"any message",
        data:"any data",
        status: 200
    })
})

module.exports = uesrRoute;