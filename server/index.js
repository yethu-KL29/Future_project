const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usermodel = require("./models/user");
const cors = require("cors");
app.use(cors());
app.use(express.json());
mongoose.connect(
    "mongodb+srv://yethukichu:pass123@cluster0.37zlvfq.mongodb.net/MERN?retryWrites=true&w=majority"
);

app.get("/getUsers",(req,res)=>{
      usermodel.find({},(err,result)=>{
       if(err){

       }else{
          res.json(result);
       }
      })
})
app.post("/createUsers",async(req,res)=>{
     const user = req.body;
     const newUser= new usermodel(user);
     await newUser.save();
     res.json(user);
})

app.listen(3001,()=>{
    console.log("nice");
})