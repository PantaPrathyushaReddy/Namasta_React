import { CON_URL } from "../utils/contants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData?.info;

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
export default RestaurantCard;

// export const withPromtedLable = (RestaurantCard) => {
//     return (props) => {
//         const { resData } = props;
//         return (
//             <div className="relative">
//                 <label className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-bold rounded">
//                     {resData?.info?.aggregatedDiscountInfoV3?.header} {resData?.info?.aggregatedDiscountInfoV3?.subHeader}
//                 </label>
//                 <RestaurantCard {...props} />
//             </div>
//         );
//     };
// };

export const withPromtedLable = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const offerHeader = resData?.info?.aggregatedDiscountInfoV3?.header;
    const offerSubHeader = resData?.info?.aggregatedDiscountInfoV3?.subHeader;

    return (
      <div className="relative">
        {/* Display offer label only if the header exists and is not empty */}
        {offerHeader ? (
          <label className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-bold rounded">
            {offerHeader} {offerSubHeader}
          </label>
        ) : null}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

