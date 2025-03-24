import ItemList from './ItemList';
const RestaurantCategory=({data,showItems,setShowIndex})=>{
    
  
    const handClick=()=>{
        setShowIndex();
        console.log(setShowIndex(),"setshowindex")
    }
    return(
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className='flex justify-between cursor-pointer' onClick={handClick}>
          <span className='font-bold text-lg'>{data.title}({data.itemCards.length})</span>
          {/* <span><CloudDownloadIcon/></span> */}
          <span>{showItems?"⬆":"⬇"}</span>
          </div>
          {/*Accordion  Body*/}
          {showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
};
export default RestaurantCategory;

