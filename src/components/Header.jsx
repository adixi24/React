import { useState } from "react";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
const Header=()=>{
    const[btnName,setBtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();
    return(
<div className="header">
    <div className="logoContainer">
        <img className="logo" src={logo}/>
    </div>
    <div className="nav-items">
        <ul>

            <li>OnlineStatus:{onlineStatus ? "online" :"offline"}</li>
            <li> <Link to="/">Home</Link></li>
            <li>
                <Link to="/about">About Us</Link></li>
            <li>
                <Link to="/contactus">Contact Us</Link></li>
            <li>Cart</li>
            <li>
                <Link to="/grocery">Grocery</Link>
            </li>
            <button className="login"onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login");}}>{btnName}</button>
        </ul>
    </div>
</div>
    );
}

export default Header;