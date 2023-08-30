import {IMG_CDN_URL} from "../util/constants"
const RestaurantCard=(probs)=>{
    const{resData} =probs;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,deliveryTime}=resData;
 
    return(
        <div className="res-card" style={{backgroundColor :"#f0f0f0"}}>
            <img  clasName="res-logo"alt="res-logo" src={IMG_CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div> 
    );
}
export default RestaurantCard;