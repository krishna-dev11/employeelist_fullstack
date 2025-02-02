const EMPLOYEE = require("../models/employeemodel");

exports.CreateEmployee = async(req , res)=>{
   try{
    const{name , email , department , role , image} = req.body;

    if(!name || !email || !department || !role || !image)
    {
        res.status(400).json({
            success:false,
            message:"fill complete details"
        })
    }

    const updatedemployee = await EMPLOYEE.create({name , email , department , role , image});

    res.status(200).json({
        success:true,
        data:updatedemployee,
        message:"employee created successfully"
    })
   } catch(error){
            res.status(500).json({
            success:false,
            message:"we are cant able to create employee in data base"
           })
   }
}

