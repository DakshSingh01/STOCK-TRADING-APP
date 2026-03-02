const router=require("express").Router();
const Stock=require("../models/Stock");
const auth=require("../middleware/auth");
const role=require("../middleware/role");

router.get("/",async(req,res)=>res.json(await Stock.find()));
router.get("/:id", async (req, res) => {
  const stock = await Stock.findById(req.params.id);
  res.json(stock);
});

router.post("/",auth,role("admin"),async(req,res)=>{
 res.json(await Stock.create(req.body));
});

router.put("/:id",auth,role("admin"),async(req,res)=>{
 res.json(await Stock.findByIdAndUpdate(req.params.id,req.body,{new:true}));
});

router.delete("/:id",auth,role("admin"),async(req,res)=>{
 await Stock.findByIdAndDelete(req.params.id);
 res.json("Deleted");
});

module.exports=router;