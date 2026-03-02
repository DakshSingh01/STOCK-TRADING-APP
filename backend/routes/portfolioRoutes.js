const router=require("express").Router();
const auth=require("../middleware/auth");
const Portfolio=require("../models/Portfolio");

router.get("/",auth,async(req,res)=>{
 const data=await Portfolio.find({userId:req.user.id}).populate("stockId");
 res.json(data);
});

module.exports=router;