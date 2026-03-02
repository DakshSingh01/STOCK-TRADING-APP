const router=require("express").Router();
const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

router.post("/register",async(req,res)=>{
 const hash=await bcrypt.hash(req.body.password,10);
 await User.create({...req.body,password:hash});
 res.json("Registered");
});

router.post("/login",async(req,res)=>{
 const user=await User.findOne({email:req.body.email});
 if(!user) return res.status(400).json("User not found");
 const match=await bcrypt.compare(req.body.password,user.password);
 if(!match) return res.status(400).json("Wrong password");
 const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET);
 res.json({token});
});

module.exports=router;