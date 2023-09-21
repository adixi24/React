import ItemList from "./ItemList";

const RestaurantCategories=({data})=>
{
    console.log("data in categories"+data);
        return(
    
<div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
    <div flex justify-between>
    <span className="font-bold text-lg">{data.title}(data.itemCards.length)</span>
    <span>:⬆️</span>
        {/* header */}
    {/* accordian body */}
    Restro Categories
    </div>
   
    <ItemList items={data.itemCards} />
</div>
    );

}

export default RestaurantCategories;