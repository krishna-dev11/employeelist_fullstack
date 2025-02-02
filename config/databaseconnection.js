const mongoose = require("mongoose")

require("dotenv").config();

const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL ,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    } )
    .then(()=>{console.log("connection successful between server and database")})
    .catch((error)=>{console(`connection has been failed between server and database due to error ${error}`)});
}

module.exports = dbconnect;