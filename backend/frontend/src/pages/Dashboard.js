import {useEffect,useState} from "react";
import axios from "axios";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS,LineElement,CategoryScale,LinearScale,PointElement} from "chart.js";

ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement);

export default function Dashboard(){
 const [stocks,setStocks]=useState([]);

 useEffect(()=>{
  axios.get("http://localhost:5000/api/stocks").then(res=>setStocks(res.data));
 },[]);

 const chartData={
  labels:["Mon","Tue","Wed","Thu","Fri"],
  datasets:[{
   label:"Market Trend",
   data:[100,120,110,150,170],
   borderColor:"#22c55e",
   backgroundColor:"#22c55e"
  }]
 };

 return(
  <div className="container">
   <div className="card">
    <h2>Market Overview</h2>
    <Line data={chartData}/>
   </div>

   <div className="card">
    {stocks.map(s=>(
     <div key={s._id} className="stock-row">
       <div>{s.name}</div>
       <div className="green">₹{s.price}</div>
     </div>
    ))}
   </div>
  </div>
 );
}