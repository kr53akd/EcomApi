const { verifyToken } = require("../utils/jwt");

async function Auth(req, res, next){
    try{
         const authToken = await verifyToken(req.headers.authorization);
         if(!authToken){
            return res.status(401).json({message:"Token missing", status:401})
         };
         if(authToken?.error){
            return res.status(401).json({message:authToken.error, status: 401})
         }
         console.log(authToken, 9)
         next();
    }catch(error){
        console.error(`Error in Auth function ${error}`);
        return res.status(500).json({
            message:"Internal Server error",
            status: 500
        })
    }
};

module.exports = {Auth}