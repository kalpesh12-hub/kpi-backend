const { Router } = require("express");
const {
    getCommunications
  
} = require("../controller/Communicationcontroller");

const Communicationsroutes = Router();

Communicationsroutes.get("/getCommunications/:subfunction", getCommunications);



module.exports = Communicationsroutes;