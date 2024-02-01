const { Router } = require("express");
const {
  getProject
  
} = require("../controller/ProjectManagment");

const Projectroutes = Router();

Projectroutes.get("/getProject/:subfunction", getProject);



module.exports = Projectroutes;