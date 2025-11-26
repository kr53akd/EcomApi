
const { createSchema } = require("./userValidation");
const List = (req, res)=>{
    return res.status(200).json({
        message:"any message",
        data:"any data",
        status: 200
    })
};

const Create = (req, res)=>{
    try{
    const { body } = req;
    const validateRequset = createSchema.validate(body);
    if(validateRequset.error){
        return validateRequset
    }
    const { email } = body;
    if(!email){
        return res?.status(400).json({
            message:"Email not found",
            error:{
                email:"Please enter email"
            },
            status:400
        })
    }

    return res.status(200).json({
        message:"any message",
        data:body,
        status: 200
    })
}catch(error){
    console.error("Error occured in while creating the user", error)
     return res?.status(500).json({
            message:"Internal server error!",
            status:500
        })
}
}

const Update = (req, res)=>{
    return res.status(200).json({
        message:"any message",
        data:"any data",
        status: 200
    })
}

const Delete = (req, res)=>{
    return res.status(200).json({
        message:"any message",
        data:"any data",
        status: 200
    })
}
module.exports = {List, Create, Update, Delete}