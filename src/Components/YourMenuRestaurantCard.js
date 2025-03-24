import { CON_URL } from "../utils/contants";
const YourMenuRestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData?.card?.card?.info;
    

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 overflow-hidden">
            <img 
                className="w-full h-40 object-cover rounded-lg" 
                alt="res-logo" 
                src={CON_URL + cloudinaryImageId}
            />
            <h2 className="font-bold py-2 text-lg truncate">{name}</h2>
            <h3 className="text-sm text-gray-600 truncate">{cuisines.join(', ')}</h3>
            <h4>{avgRating} Stars</h4>
            <h4 >{costForTwo}</h4>
            <h4 >{sla.deliveryTime} min</h4>
        </div>
    );
}
export default YourMenuRestaurantCard;

export const withPromtedLable = (YourMenuRestaurantCard) => {
    return (props) => {
        const { resData } = props;
        return (
            <div className="relative">
                <label className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-bold rounded">
                    {resData?.card?.card?.info?.aggregatedDiscountInfoV3?.header} {resData?.card?.card?.info?.aggregatedDiscountInfoV3?.subHeader}
                </label>
                <YourMenuRestaurantCard {...props} />
            </div>
        );
    };
};