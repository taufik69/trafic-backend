const mongoose = require('mongoose');
const { Schema } = mongoose;

const DashboardSchema = new Schema({
  vehicleType :{
    type:String,
    required:true,
  },
  Area:{
    type:String,
    required:true
  },
  OffenceDetails:{
    type:String,
    required:true
  }

});
module.exports = mongoose.model('Dashboard',DashboardSchema )