const express =  require('express');
const _ = express.Router();

_.get('/registraiton' , async (req,res)=> {
    res.status(200).json({
        Message:"registraiton route ok"
    })
})


module.exports = _;