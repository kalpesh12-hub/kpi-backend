const { Router } = require("express");
const {
  getSales
  
} = require("../controller/Sales");

const Salesroutes = Router();

Salesroutes.get("/getSales/:subfunction", getSales);



module.exports = Salesroutes;