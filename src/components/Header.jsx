import { useContext, useState } from "react";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext"
const Header=()=>{
    const[btnName,setBtnName]=useState("Login");
    const {logedInUser}=useContext(UserContext);
    console.log("logedInUser"+logedInUser);
    const onlineStatus=useOnlineStatus();
    return(
<div className="flex justify-between bg-pink-100 shadow-lg m-2">
    <div className="logoContainer">
        <img className="w-56" src={logo}/>
    </div>
    <div className="flex items-center">
        <ul className="flex p-4 m-4">

            <li className="px-4">OnlineStatus:{onlineStatus ? "online" :"offline"}</li>
            <li className="px-4">  <Link to="/">Home</Link></li>
            <li className="px-4">
                <Link to="/about">About Us</Link></li>
            <li className="px-4">
                <Link to="/contactus">Contact Us</Link></li>
            <li className="px-4 font-bold">{logedInUser}</li>
            <li className="px-4">
                <Link to="/grocery">Grocery</Link>
            </li>
            <button className="login"onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login");}}>{btnName}</button>
        </ul>
    </div>
</div>
    );
}

export default Header;