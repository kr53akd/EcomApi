async function Auth(req, res, next){
    try{
         const {body} = req;
         const {email} = body;
         if(email){
            const username = email.split("@")[0];
            console.log(username, 7)
            req.body = {...body, username};
         }
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