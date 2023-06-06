const mongoose =require('mongoose')
const { Schema } = mongoose;

const signUpSchema = new Schema({
  Username :{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  confrimPassword:{
    type:String,
    required:true
  }

});
module.exports = mongoose.model('Signup',signUpSchema )