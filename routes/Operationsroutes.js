const { Router } = require("express");
const {
    getOprations
  
} = require("../controller/Operationscontroller");

const Operationsroutes = Router();

Operationsroutes.get("/getOperations/:subfunction", getOprations);



module.exports = Operationsroutes;