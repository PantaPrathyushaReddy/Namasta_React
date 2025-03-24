import { useDispatch } from "react-redux";
import { CON_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
    const dispatch=useDispatch();
  const handleAddItem=(item)=>{
    //Dispatch an action
    dispatch(addItem(item));
  }
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    {/* Left section (Text) */}
                    <div className="w-9/12">
                        <div className="p-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹{item.card.info.price ? (item.card.info.price / 100) : (item.card.info.defaultPrice / 100)}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    {/* Right section (Button & Image) */}
                    <div className="w-3/12 flex flex-col items-center relative">
                        
                        <img className="mt-2 w-full h-36 rounded-lg" src={CON_URL + item.card.info.imageId} alt="Item" />
                        <button className="px-7 py-2 rounded-lg bg-white text-black border-gray-50 shadow-lg"onClick={()=>handleAddItem(item)}>Add +</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
