const { createSchema, loginSchema } = require("./userValidation");
const {connection} = require("../../db.conn");
const { generateToken } = require("../../utils/jwt");

const Login = async(req, res)=>{
    const {body} =  req;
    const validateRequest = loginSchema.validate(body);
    
    const tokenRes = await generateToken(body);
    if(validateRequest.error){
         return res.status(400).json({
            message:"Bad Requrest",
            error: {message : validateRequest.error.details[0].message},
            status: 401
        })
    }
  
    return res.status(200).json({
        message:"Logged in Successfully",
        data: {token: tokenRes},
        status:200
    })
}

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
    const validateRequest = createSchema.validate(body);
    console.log(validateRequest?.error?.details, 15)
    if(validateRequest.error){
        return res.status(400).json({
            message:"Bad Requrest",
            error: {message : validateRequest.error.details[0].message},
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

module.exports = {List, Create, Update, Delete, Login}