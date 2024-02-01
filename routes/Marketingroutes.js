const { Router } = require("express");
const {
    getMarketing
  
} = require("../controller/Marketingcontroller");

const Marketingroutes = Router();

Marketingroutes.get("/getMarketing/:subfunction", getMarketing);



module.exports = Marketingroutes;