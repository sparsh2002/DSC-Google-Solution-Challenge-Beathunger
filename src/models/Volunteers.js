const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    mnumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
   
    add:{
        type:String,
        required:true
    },
    

});

const Volunteer = new mongoose.model("Volunteer",employeeSchema);

module.exports = Volunteer;
