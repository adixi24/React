const ItemList =({items})=>{
    console.log(items)
    return(
        <div>
            {items.map(item=>( 
            <div key={items.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left">
            <div className="p-2">
                <span>{item.card.info.name}</span>
                <span>- ₹{item.card.info.price}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
            </div>
            ) )}
            categoriy items
        </div>
    );
};

export default ItemList;