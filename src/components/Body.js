import RestaurantCard ,{withPromotatedLabel} from "./RestaurantCard";
import { restaurantList } from "../util/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

const Body=()=>{
    const [listOfReastaurant,setListOfReastaurant] =useState([]);
    const[filterdListOfRestaurant,setFilterdListOfRestaurant] =useState([]);
    const[searchText,setSearchText]=useState("");
    const RestaurantCardPromotated=withPromotatedLabel(RestaurantCard);
    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData= async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        console.log(json);
      setListOfReastaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterdListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
const onlineStatus=useOnlineStatus();
if(onlineStatus=== false) return <h1>Looks like you are offline please check your internet connection</h1>
      if(listOfReastaurant === 0)
      {
        return <Shimmer />
      }
  
    return listOfReastaurant ===0 ? <Shimmer />:(  <div className="body">
      <div className=" flex filter">
      <div className="search m-4 p-4">
        <input type="text" className="search-box border-solid border-black rounded-lg" value={searchText} onChange=
        {(e)=>{setSearchText(e.target.value)}}/> 
          <button  className="px-4 py-2 m-4 bg-green-100"onClick={()=>{
            const filterdlist=listOfReastaurant.filter((res)=>res?.info.name.includes(searchText)
            );
          set(filterdlist);
          }}>search</button>
       
      </div>
      <div className="search m-4 p-4 flex items-center">
      <button  className="search-box border-solid border-black rounded-lg" onClick={()=>{
            const filterdList=listOfReastaurant.filter((res)=>res.info.avgRating >4);
            setListOfReastaurant(filterdList);
        }
       
        }>Top Rated Restaurant</button>
      </div>
          
</div>
          <div className="flex flex-wrap">
          {
            filterdListOfRestaurant.map((resaurant)=>(
             <Link to={"/restaurants/"+resaurant?.info.id}  key={resaurant?.info.id}> <RestaurantCard resData={resaurant?.info} /> </Link>
            ))

            

          }
          
          </div>
      </div>
    );
  }
export default Body;  