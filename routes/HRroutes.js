const { Router } = require("express");
const {
  getHR
  
} = require("../controller/HRcontroller");

const HRroutes = Router();

HRroutes.get("/getHR/:subfunction", getHR);



module.exports = HRroutes;