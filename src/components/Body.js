import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../util/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Body=()=>{
    const [listOfReastaurant,setListOfReastaurant] =useState([]);
    const[filterdListOfRestaurant,setFilterdListOfRestaurant] =useState([]);
    const[searchText,setSearchText]=useState("");
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

      if(listOfReastaurant === 0)
      {
        return <Shimmer />
      }
  
    return listOfReastaurant ===0 ? <Shimmer />:(  <div className="body">
      <div className="filter">
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange=
        {(e)=>{setSearchText(e.target.value)}}/> 
          <button onClick={()=>{
            const filterdlist=listOfReastaurant.filter((res)=>res?.info.name.includes(searchText)
            );
          set(filterdlist);
          }}>search</button>
       
      </div>
      
          <button className="filter-btn" onClick={()=>{
            const filterdList=listOfReastaurant.filter((res)=>res.info.avgRating >4);
            setListOfReastaurant(filterdList);
        }
       
        }>Top Rated Restaurant</button>
</div>
          <div className="res-container">
          {
            filterdListOfRestaurant.map((resaurant)=>(
             <Link to={"/restaurants/"+resaurant?.info.id}  key={resaurant?.info.id}> <RestaurantCard resData={resaurant?.info} />  </Link>
            ))
            

          }
          
          </div>
      </div>
    );
  }
export default Body;  