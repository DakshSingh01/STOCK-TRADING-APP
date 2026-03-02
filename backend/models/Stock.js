const mongoose=require("mongoose");
const schema=new mongoose.Schema({
 name:String,
 symbol:String,
 price:Number
},{timestamps:true});
module.exports=mongoose.model("Stock",schema);