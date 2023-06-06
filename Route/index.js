const express =  require('express');
const _ = express.Router();
const allroutes  = require('./api');
const base_url  = "/api/v1";
_.use(base_url,allroutes);
_.use(base_url,(req,res)=>{
    res.status(404).json({
        Error:"Api Route   not found "
    })
});


module.exports = _;