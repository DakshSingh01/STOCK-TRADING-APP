import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";

export default function App(){
 return(
  <BrowserRouter>
   <div className="navbar">
    <div className="logo">📈 ProTrade Enterprise</div>
    <div>
      <Link className="link" to="/">Login</Link>
      <Link className="link" to="/dashboard">Dashboard</Link>
      <Link className="link" to="/portfolio">Portfolio</Link>
    </div>
   </div>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
   </Routes>
   <ToastContainer/>
  </BrowserRouter>
 );
}