const express =  require('express');
const _ = express.Router();
const auth = require('./auth');
const Dashboard  = require('./Dashboard')
_.use('/auth',auth);
_.use('/home',Dashboard)


module.exports = _;