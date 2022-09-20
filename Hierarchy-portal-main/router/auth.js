const jwt = require('jsonwebtoken');
const express = require('express');
const mongooose = require('mongoose');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate") ;


require('../db/conn');
const User = require("../model/userSchema");

router.get('/',(req,res) =>{
    res.send(`Hello Server via auth`);
 });
 
// Using PROMISES

//  router.post('/register',(req,res) =>{
   
//    const {name,email,phone,work,password,cpassword} = req.body;
   
//    if(!name || !email || !phone || !work || !password || !cpassword){
//       return res.status(422).json({ error: "Plz fill the form completely...!!!" });
//    }

//    User.findOne({email: email})
//    .then((userExist) => {
//        if(userExist){
//          return res.status(422).json({error: "Email Already Exists...!!!"});
//        }
//        const user = new User({name,email,phone,work,password,cpassword});
      
//        user.save().then(() =>{
//          res.status(201).json({meassage: "User Registered Successfully...!!!"});
//        }).catch((err) => res.status(500).json({error: "Fails to Register...!!!"}));

//    }).catch(err => { console.log(err); })

//  });


// Using ASYNC-AWAIT

const linemanschema = new mongooose.Schema({
 

  Consumerid:Number,
  Assignedlineman:String,
  Consumername:String,
  Mobnumber:Number,
  Address:String,
  Workstatus:String


});

const Consumerdetail = mongooose.model("Consumerdetail", linemanschema);


router.post("/register", async(req,res) =>{
   
   const {name,email,phone,work,password,cpassword} = req.body;
   
   if(!name || !email || !phone || !work || !password || !cpassword){
      return res.status(422).json({ error: "Plz fill the form completely...!!!" });
   }
  try{
     const userExist = await User.findOne({email: email});
       
     if(userExist){
          return res.status(422).json({error: "Email Already Exists...!!!"});
       }
       else if(password != cpassword){
         return res.status(422).json({error: "Password doesn't match...!!!"});
       }
       else{
         const user = new User({name,email,phone,work,password,cpassword});
      
         await user.save();
  
         res.status(201).json({error: "User Registered Successfully...!!!"}); 
       }

  }catch(err){
   console.log(err);
  }
   
 });



 app.get("/fetchlist", async (req, res) => {
   
  const user = await Consumerdetail.find();
  if (user) {
    res.status(200).json(user);
   
  } else {
    res.status(404).json({ error: "User not found" });

  }
});
// Login Route

router.post('/signin', async (req, res) => {
   
   try{
       const {email, password} = req.body;

       if(!email || !password){
         return res.status(400).json({error: "Plz fill the DATA...!!!"});
       }
    
       const userLogin = await User.findOne({email: email});
       
       if(userLogin){
         const isMatch = await bcrypt.compare(password,userLogin.password);

         const token = await userLogin.generateAuthToken();

         res.cookie("jwtoken", token,{
            expires: new Date(Date.now() +  258920000),
            httpOnly:true
         });

         if(isMatch){
            res.json({message:"Successfully Login...!!!"});
       }
       else{
         res.status(400).json({message:"Invalid Credentils Pass...!!!"});
       }
       }
       else{
         res.status(400).json({message:"Invalid Credentils Email...!!!"});
       }
       

   }catch(err){
        console.log(err);
   }
});


router.get('/about', authenticate, (req, res) => {
  console.log(`MyAbout`);
  res.send(req.rootUser);
});

router.post("/fetchlist", async (req, res) => {
   
  const user = await Consumerdetail.find();
  if (user) {
    res.status(200).json(user);
   
  } else {
    res.status(404).json({ error: "User not found" });

  }
});



router.get('/getData', authenticate, (req, res) => {
  console.log(`MyHome`);
  res.send(req.rootUser);
});

router.get('/logout', (req, res) => {
  console.log(`MyLogout`);
  res.clearCookie('jwtoken', {path: '/'});
  res.status(200).send('User SignOut');
});


 module.exports = router;  