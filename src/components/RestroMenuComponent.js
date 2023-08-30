import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import { FETCH_REST_URL } from "../util/constants";

const RestroMenuComponent=()=>
{
    const[resInfo ,setResInfo]=useState(null);
    const{resId}=useParams();

    useEffect(()=>{
    fecthMenuData();

    },[]);

    const fecthMenuData=async()=>{
            const data=await fetch(FETCH_REST_URL+resId);
            const json=await data.json();
            console.log("data fetched from api"+json);
            setResInfo(json.data);
    }
     
  
     return (
        <div className="menu">
        <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
        <h2>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")}</h2>
        <li>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</li>
       {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(item=>
       <li key={item.card.info.id}>
        {item.card.info.name}
       </li>)
    }
    </div>
    );
    
}
export default RestroMenuComponent;