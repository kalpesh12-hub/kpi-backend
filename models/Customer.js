const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  
  sr_no : {
type: String,
required:true

  },
    kpi_name: {
    type: String,
    required: true,
  },


  description: {
    type: String,
    required:true,
  },


  function:{
    type : String,
    required: true
  },


  calculation : {
    type : String,
    required : true
  },


  subfunction : {
    type : String,
    required : true
  }


});

module.exports = mongoose.model("customer", customerSchema);