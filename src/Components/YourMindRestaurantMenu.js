import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import YourMenuRestaurantCard, {withPromtedLable} from "./YourMenuRestaurantCard";
import { Link } from "react-router";

const YourMindRestaurantMenu = () => {
    const { entityId } = useParams();
    const [listOfYourMindRestaurant, setListOfYourMindRestaurant] = useState([]);
    const RestaurantCardPromoted=withPromtedLable(YourMenuRestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4540299&lng=78.34653109999999&collection=${entityId}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
            const jsonData = await data.json();

            const restaurants = jsonData?.data?.cards?.filter(
                (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
            );

            setListOfYourMindRestaurant(restaurants);
        };
        console.log(listOfYourMindRestaurant,"yourres");

return (!listOfYourMindRestaurant || listOfYourMindRestaurant.length === 0) ? (
    <Shimmer />
) : (
    <div className="flex flex-wrap justify-center">
        {listOfYourMindRestaurant.map((restaurant) => (
            <Link key={restaurant?.card?.card?.info?.id} to={"/restaurants/" + restaurant?.card?.card?.info?.id}>
                {(restaurant?.card?.card?.info?.aggregatedDiscountInfoV3?.header!="")
                    ? <RestaurantCardPromoted resData={restaurant} />
                    : <YourMenuRestaurantCard resData={restaurant} />
                }
            </Link>
        ))}
    </div>
);

};

export default YourMindRestaurantMenu;