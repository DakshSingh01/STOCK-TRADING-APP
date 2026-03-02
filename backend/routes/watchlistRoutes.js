const router=require("express").Router();
const auth=require("../middleware/auth");
const Watchlist=require("../models/Watchlist");

router.post("/",auth,async(req,res)=>{
 res.json(await Watchlist.create({userId:req.user.id,stockId:req.body.stockId}));
});

router.get("/",auth,async(req,res)=>{
 res.json(await Watchlist.find({userId:req.user.id}).populate("stockId"));
});

module.exports=router;