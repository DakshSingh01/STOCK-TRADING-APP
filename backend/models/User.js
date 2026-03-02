const mongoose=require("mongoose");
const schema=new mongoose.Schema({
 name:String,
 email:{type:String,unique:true},
 password:String,
 role:{type:String,default:"user"},
 balance:{type:Number,default:100000}
},{timestamps:true});
module.exports=mongoose.model("User",schema);