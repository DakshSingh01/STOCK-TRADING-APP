const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const morgan=require("morgan");
require("dotenv").config();

const app=express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/auth",require("./routes/authRoutes"));
app.use("/api/stocks",require("./routes/stockRoutes"));
app.use("/api/trade",require("./routes/tradeRoutes"));
app.use("/api/portfolio",require("./routes/portfolioRoutes"));
app.use("/api/watchlist",require("./routes/watchlistRoutes"));

app.listen(process.env.PORT,()=>console.log("Enterprise Server running"));