const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.get("/",(req, res)=>{
    return res.status(200).json({
        message:"Server is nunning OK",
        data:{
            "data":"test info in data object"
        },
        status:200
    })
});

app.use("/api", require("./route"))

app.listen(port, ()=> console.log(`Server is running at port:${port}`));