const EMPLOYEE = require("../models/employeemodel");

exports.GetAllEmployee = async(req , res)=>{

    try{
        const allemplyeedata = await EMPLOYEE.find({});

        res.status(200).json({
            success:true,
            data:allemplyeedata,
            message:"data successfully fetched from database"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:`we can't able to fetched data from database due to error {error}`
        })

    }

}