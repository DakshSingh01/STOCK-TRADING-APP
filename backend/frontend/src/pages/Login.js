import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

export default function Login(){
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const login=async()=>{
  try{
   const res=await axios.post("http://localhost:5000/api/auth/login",{email,password});
   localStorage.setItem("token",res.data.token);
   toast.success("Login Successful");
  }catch{
   toast.error("Invalid Credentials");
  }
 };

 return(
  <div className="container">
   <div className="card">
    <h2>Login to Enterprise ProTrade</h2>
    <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
    <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
    <button onClick={login}>Login</button>
   </div>
  </div>
 );
}