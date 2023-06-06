
const singup = require('../Models/SignupSchema');
exports.signUpController = async (req,res)=> {
    try {
      const {Username,email,password,confrimPassword} = req.body;
      if(!Username){
          res.status(404).json({
              Error:` Username Missing`
          })
      }
  
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
  
      if(!confrimPassword ){
          res.status(404).json({
              Error:`Confrim Missing`
          })
      }
  
      // Now sent data to database 
      const sentdata = await new singup({
          Username,
          email,
          password,
          confrimPassword
      }).save();
      res.status(200).json({
          message:`Sucessfully Data send to Database : ${sentdata}`
      })
    } catch (error) {
      res.status(200).json({
          error:`Registration Error : ${error}` 
      })
    }
  }