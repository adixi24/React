import { useEffect, useState } from "react";

const useOnlineStatus =()=>{
    //contrcat here we dont need any input to check the online status it will return online status it will return boolean value
    const[onlineStatus,setOnlineStatus]=useState(true);

useEffect(()=>{
    window.addEventListener("offline",()=>{
        setOnlineStatus(false);
    });
    window.addEventListener("online",()=>{
        setOnlineStatus(true);
    });
},[]);

    return onlineStatus;
}


export default useOnlineStatus;