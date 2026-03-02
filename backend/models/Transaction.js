const mongoose=require("mongoose");
const schema=new mongoose.Schema({
 userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
 stockId:{type:mongoose.Schema.Types.ObjectId,ref:"Stock"},
 type:String,
 quantity:Number,
 price:Number
},{timestamps:true});
module.exports=mongoose.model("Transaction",schema);