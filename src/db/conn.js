const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Sparsh:sjhacker3435@cluster0.kat9b.mongodb.net/beathungerfinal?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection successfull`);
}).catch((e)=>{ 
    console.log(`no connection`); 
}) 
