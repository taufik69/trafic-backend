const SignInSchema = require('../Models/SignInSchema');
 exports.SigninController = async (req, res)=> {
    try {
        const {email,password} = req.body;
    
    
        if(!email){
            res.status(404).json({
                Error:` Email Missing`
            })
        }
    
        if(!password){
            res.status(404).json({
                Error:`Password Missing`
            })
        }
    
        // Now sent data to database 
        const sentdata = await new SignInSchema({
            email,
            password, 
        }).save();
        res.status(200).json({
            message:`Sucessfully Data send to Database : ${sentdata}`
        })
        
      } catch (error) {
        res.status(200).json({
            error:`Login Error : ${error}` 
        })
      }
}