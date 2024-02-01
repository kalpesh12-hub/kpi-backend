const { Router } = require("express");
const {
    getCustomer
  
} = require("../controller/Customercontroller");

const Customerroutes = Router();

Customerroutes.get("/getCustomer/:subfunction", getCustomer);



module.exports = Customerroutes;