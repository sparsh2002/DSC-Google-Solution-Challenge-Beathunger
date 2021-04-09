const express = require("express");
const app = express();
const path = require("path");
//const html = require("html");
const hbs =  require("hbs");
const { json } = require("express");
require("./db/conn");
const Volunteer = require("./models/Volunteers");
const Ngo = require("./models/Ngos");
const Donate = require("./models/Donates");
const Contact = require("./models/Contacts");
const port =process.env.PORT || 3000;
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/blog",(req,res)=>{
    res.render("blog");
});

app.get("/volunteer",(req,res)=>{
    res.render("volunteer");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/ngo",(req,res)=>{
    res.render("ngo");
});

app.get("/volunteerl",(req,res)=>{
    res.render("volunteerl");
});

app.get("/signup",(req,res)=>{
    res.render("signup");
});

app.get("/contactus",(req,res)=>{
    res.render("contactus");
});
app.get("/aboutus",(req,res)=>{
    res.render("aboutus");
});

app.get("/donate",(req,res)=>{
    res.render("donate");
});
app.post("/volunteerl",async(req,res)=>{
   try {
       const registerEmployee = new Volunteer({
           fname:req.body.fname,
           mnumber:req.body.mnumber,
           email:req.body.email,
           add:req.body.add
           
       })
       const registered = await registerEmployee.save();
       res.status(201).redirect("/");
   } catch (error) {
       res.status(400).send(error);
   }
});

app.post("/ngo",async(req,res)=>{
   try {
       const registerEmployee = new Ngo({
           fname:req.body.fname,
           mnumber:req.body.mnumber,
           email:req.body.email,
           add:req.body.add
           
       })
       const registerngo = await registerEmployee.save();
       res.status(201).redirect("/");
   } catch (error) {
       res.status(400).send(error);
   }
});
app.post("/donate",async(req,res)=>{
   try {
       const registerEmployee = new Donate({
           fname:req.body.fname,
           mnumber:req.body.mnumber,
           email:req.body.email,
           add:req.body.add,
           padd:req.body.padd
           
       })
       const registerdoner = await registerEmployee.save();
       res.status(201).redirect("/");
   } catch (error) {
       res.status(400).send(error);
   }
});

app.post("/contactus",async(req,res)=>{
   try {
       const registerEmployee = new Contact({
           name:req.body.name,
           email:req.body.email,
           message:req.body.message,
           
       })
       const registercontact = await registerEmployee.save();
       res.status(201).redirect("/");
   } catch (error) {
       res.status(400).send(error);
   }
});

app.listen(port ,()=>{
    console.log(`Server is Running at port no ${port}`);
});
