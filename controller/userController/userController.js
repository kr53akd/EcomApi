const { createSchema } = require("./userValidation");
const {connection} = require("../../db.conn");

const List = async (req, res)=>{
    
    (await connection).query({
        sql:"SELECT * FROM user",
        rowsAsArray: false
    }).then(data => {
        return res.status(200).json({
        message:"any message",
        data:data[0],
        status: 200
    })
    })
    .catch(err=> {
        return res.status(500).json({
        message:"Something went wrong!",
        error: err,
        status: 500
    })
    });
    
};

const Create = async(req, res)=>{
    try{
    const { body } = req;
    console.log(body, 14)
    const validateRequset = createSchema.validate(body);
    console.log(validateRequset?.error?.details, 15)
    if(validateRequset.error){
        return res.status(400).json({
            message:"Bad Requrest",
            error: {message : validateRequset.error.details[0].message},
            status: 401
        })
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