const express=require("express");
const session=require("express-session");

const app=express();

//middleware
app.use(express.json());


//session setup

app.use(
    session({
        // this is encrypteed session h 
        secret:"mySecretKey123",
        resave:false,
        saveUninitialized:false,
        cookie:{
            maxAge:60*60*1000, //1 hour / har time liye alg hogi ye
            httpOnly:true,
        },
    })
);

app.post("/login",(req,res)=>{
    const {userName,password}=req.body;

    //dummy uthentication

    if(userName==="admin"&&password==="123"){
        req.session.user={
            userName:userName,
            role:"admin"
        };
        return res.json({mesg:"login succesfull",sessionId:req.sessionID})
    }
    return res.status(401).json({mesg:"invalid cridential"});
});

app.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.status(404).json({
            msg:"please login first"
        });
        
    }
    res.json({mesg:"User profile",
            user:req.session.user
        });
});


app.get("/deshboard",(req,res)=>{
    if(!req.session.user){
        return res.status(404).json({
            msg:"unauthorised user"
        });
    }
    res.send(`Welcome ${req.session.user.userName}`);
});
//logout(distroy session)
app.get("/logout",(req,res)=>{
    res.session.destroy((err)=>{
        if(err){
            return res.status(500).send("Error logging out");
        }
        res.clearCookie("connect.sid");//default cookie name
        res.send("logging out");
    });
    
});

//check session 
app.get("check-session",(req,res)=>{
    if(req.session.user){
        res.jsson({msg:"session Active",
            user:req.session.user
        });
    }
    else{
        res.json({
            msg:"No Active session"
        })
    }
})

app.listen(5000,()=>console.log("server started at 5000"));