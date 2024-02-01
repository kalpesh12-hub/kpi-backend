const { Router } = require("express");
const {
  getIT
  
} = require("../controller/Itcontroller");

const Itroutes = Router();

Itroutes.get("/getIt/:subfunction", getIT);



module.exports = Itroutes;