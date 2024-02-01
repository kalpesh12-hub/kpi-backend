const { Router } = require("express");
const {
  getFinance,
 
} = require("../controller/Financecontroller");

const financeroutes = Router();


financeroutes.get("/getFinance/:subfunction",getFinance);

// financeRouter.get("/getFinance", getFinance);
// financeRouter.post("/save", saveToDo);
// financeRouter.put("/update/:id", updateToDo);
// financeRouter.delete("/delete/:id", deleteToDo);

module.exports = financeroutes;