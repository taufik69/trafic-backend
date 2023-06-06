const express = require('express');
const _ = express.Router();
const {DashboardController} = require('../../Controller/DashboardController')

_.post('/dashboard',DashboardController);


module.exports = _;