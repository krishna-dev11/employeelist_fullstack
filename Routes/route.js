const express = require("express");
const router = express.Router();


const {CreateEmployee} = require("../controllers/CreateEmployee");
const {GetAllEmployee} = require("../controllers/GetAllEmployee");

router.post("/createEmployee" , CreateEmployee );
router.get("/getallemployeedata" , GetAllEmployee);

module.exports = router;