// const mongoose = require("mongoose");
// create schema
// const studentSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     age:{
//         type:Number,
//         required:true,
//         min:[18,"Age must be greater than or equal to 18"]
//     },
//     email:{
//         type:String,
//     }
    
 
// });
//  create model
// const Student = mongoose.model("Student", studentSchema);

// install 3

const express = require("express");
const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const { use } = require("react");
const app = express();
// connect to database
mongoose.connect("mongodb://localhost:27017/")
.then(()=>console.log("Database connected"))
.catch((err)=>console.log("Mongo error",err));
// create schema
const studentSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:false,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        jobTittle:{
            type:String,
        },
        gender:{
            type:String,
        },

    },
    {Timestamp:true},
);   

const user = mongoose.model("User",userSchema);
app.use(express.json);
app.use(express.urlencoded({extended:false}));
app.get("/user",async(req,res)=>{
    const allDbUsers = await user.find({});
    const html = `
    <ul>
        ${allDbUsers.map(user => `<li>${user.firstName} ${user.lastName}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

app.get("/api/user",async(req,res)=>{
    const allDbUsers = await user.find({});
    res.json(allDbUsers);

});

app.post("/api/user",async(req,res)=>{
    const body = req.body;
    if(
        !body ||
        !body.first_Name ||
        !body.email ||
        !body.last_Name ||
        !body.job_Title ||
        !body.gender 
    ){
        return res.status(400).json({error:"all fields are required"});

    }
    const result =await User.create({ 
        firstName:body.first_Name,
        lastName:body.last_Name,
        email:body.email,
        jobTitle:body.job_Title,
        gender:body.gender
    });

    console.log("result",result); 
    return res.status(201).json({msg :"User created successfully"

    })
});

// const bcrypt = require("bcrypt");

``
// const password = "12345"; 
// const hashPassword = bcrypt.hashSync(password, 10);
