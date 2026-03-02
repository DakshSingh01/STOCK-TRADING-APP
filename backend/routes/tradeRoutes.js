const router=require("express").Router();
const auth=require("../middleware/auth");
const User=require("../models/User");
const Stock=require("../models/Stock");
const Portfolio=require("../models/Portfolio");
const Transaction=require("../models/Transaction");

router.post("/buy",auth,async(req,res)=>{
 const {stockId,quantity}=req.body;
 const user=await User.findById(req.user.id);
 const stock=await Stock.findById(stockId);
 const total=quantity*stock.price;
 if(user.balance<total) return res.status(400).json("Insufficient funds");
 user.balance-=total; await user.save();
 await Portfolio.findOneAndUpdate(
  {userId:user._id,stockId},
  {$inc:{quantity}},
  {upsert:true,new:true}
 );
 await Transaction.create({userId:user._id,stockId,type:"buy",quantity,price:stock.price});
 res.json("Bought");
});

router.post("/sell",auth,async(req,res)=>{
 const {stockId,quantity}=req.body;
 const user=await User.findById(req.user.id);
 const stock=await Stock.findById(stockId);
 const holding=await Portfolio.findOne({userId:user._id,stockId});
 if(!holding||holding.quantity<quantity) return res.status(400).json("Not enough shares");
 holding.quantity-=quantity; await holding.save();
 user.balance+=quantity*stock.price; await user.save();
 await Transaction.create({userId:user._id,stockId,type:"sell",quantity,price:stock.price});
 res.json("Sold");
});

module.exports=router;