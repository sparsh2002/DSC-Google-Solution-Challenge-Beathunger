const mongoose = require("mongoose");

const employeeSchema2 = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true,
        unique:true
    },
    
});

const Contact = new mongoose.model("Contact",employeeSchema2);

module.exports = Contact;
    
