const express =  require('express');
const _ = express.Router();
const {signUpController} = require('../../Controller/SignupController')
const {SigninController} = require ('../../Controller/SigninController')


_.post('/registraiton' ,signUpController);
_.post('/login' ,SigninController);


module.exports = _;