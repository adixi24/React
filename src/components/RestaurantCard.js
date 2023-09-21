import {IMG_CDN_URL} from "../util/constants"
const RestaurantCard=(probs)=>{
    const{resData} =probs;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,deliveryTime}=resData;
 
    return(
        <div className="m-4 p-4 w-[250px]" style={{backgroundColor :"#f0f0f0"}}>
            <img  clasName="rounded-lg"alt="res-logo" src={IMG_CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold py-4">{name}</h3>
           
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div> 
    );
}
//Higher order component
export const withPromotatedLabel=(RestaurantCard)=>{
    return (probs) =>{
        return(
            <div>
                <label>Promotated</label>
                <RestaurantCard resData={...probs}/>
            </div>
        );
    };

};

export default RestaurantCard;