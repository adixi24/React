import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import { FETCH_REST_URL } from "../util/constants";
import RestaurantCategories from "./RestaurantCategories";

const RestroMenuComponent=()=>
{
    const[resInfo ,setResInfo]=useState([]);
    const{resId}=useParams();
    const[categories,setCategories] =useState([]);

    useEffect(()=>{
    fecthMenuData();

    },[]);

    const fecthMenuData=async()=>{
            const data=await fetch(FETCH_REST_URL+resId);
            const json=await data.json();
            console.log("data fetched from api"+json);
            setResInfo(json.data);
    }
     const restcat=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>  c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     setCategories(restcat);
    console.log("categories"+categories);
     
  
     return (
        <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
        <p className="font-bold text-lg">{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")}-{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
        {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
     
    </div>
    );
    
}
export default RestroMenuComponent;