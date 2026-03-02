import {useEffect,useState} from "react";
import axios from "axios";

export default function Portfolio(){
 const [data,setData]=useState([]);

 useEffect(()=>{
  const token=localStorage.getItem("token");
  axios.get("http://localhost:5000/api/portfolio",{
   headers:{Authorization:`Bearer ${token}`}
  }).then(res=>setData(res.data));
 },[]);

 return(
  <div className="container">
   <div className="card">
    <h2>Your Portfolio</h2>
    {data.map(item=>(
      <div key={item._id} className="stock-row">
        <div>{item.stockId.name}</div>
        <div>Qty: {item.quantity}</div>
      </div>
    ))}
   </div>
  </div>
 );
}