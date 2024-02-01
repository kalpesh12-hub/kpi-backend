const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const HRroutes = require("./routes/HRroutes");
const financeRouter = require("./routes/Financeroutes")
const SalesRouter = require("./routes/Salesroutes")
const MarketingRouter = require("./routes/Marketingroutes")
const ItRouter = require("./routes/Itroutes")
const OperationsRouter = require("./routes/Operationsroutes")
const ProjectRouter = require("./routes/Projectroutes")
const CustomerRouter = require("./routes/Customerroutes")
const CommunicationRouter = require("./routes/Communicationroutes")



const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 8080; 



// Middleware
app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));




app.use("/api", HRroutes);
app.use("/api", financeRouter);
app.use('/api', SalesRouter);
app.use("/api", MarketingRouter);
app.use("/api", ItRouter);
app.use("/api", OperationsRouter);
app.use("/api", ProjectRouter);
app.use("/api",CustomerRouter);
app.use("/api" ,CommunicationRouter )





app.listen(PORT, () => console.log(`Listening at ${PORT}...`));