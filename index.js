const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());

const employeeroute = require("./Routes/route")
app.use("/api/v1" , employeeroute)

app.listen(PORT , ()=>{
    console.log(`server started at port ${PORT}`);
})

const dbconnect = require("./config/databaseconnection");
dbconnect();

app.get("/" , (req , res)=>{
  res.send(`<h1>these is home page baby</h1>`)
})