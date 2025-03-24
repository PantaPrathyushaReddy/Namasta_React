import React, { useContext } from "react";
import RestaurantCard, {withPromtedLable} from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js"
import { Link } from "react-router";
import YourMind from "./YourMind.js";
// import { withPromtedLable } from "./RestaurantCard.js";
import UserContext from "../utils/UserContext.js";
const Body = () => {
    const[listOfRestaurants,setlistOfRestaurants]=useState([]);
    const[filteredRestaurant,setfilteredRestaurant]=useState([]);
    const[searchText,setsearchText]=useState("");
    const RestaurantCardPromoted=withPromtedLable(RestaurantCard)
    const[yourMind,setYourMind]=useState([]);
    const{loggedUser,setUserName}=useContext(UserContext);
    // console.log(listOfRestaurants);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4410483&lng=78.3856447&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData=await data.json();
        // console.log(jsonData);
        //optional channinh
        setlistOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setYourMind(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    }
    //Conditional Rendering.
    return listOfRestaurants.length===0 ? (<Shimmer/>):(
        <div className="body">
            <div>
                <h5 className="px-10 text-2xl my-2">What's on your mind?</h5>
            <div className="mind flex overflow-x-auto scrollbar-hide">
            {yourMind.map((mind)=>(
                <YourMind key={mind.id} yourdata={mind}/>

            ))}
            </div>
            </div>
            <div className="filter flex justify-center">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black " value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        //Filter the restraunt cards and update the UI
                        //SearchText
                        const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setfilteredRestaurant(filteredRestaurants);
                    }}>Search</button>

                </div>
                <div className="search m-4 p-4 flex items-center" >
                <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={()=>{
                    
                    const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.5)
                    setfilteredRestaurant(filteredList);
                    
                }}>Top Rated Restaurant</button>
                </div>
                <div className="search m-4 p-4 flex items-center" >
                    <input className="border border-black p-1" value={loggedUser} onChange={(e)=>{
                        setUserName(e.target.value);
                    }}/>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredRestaurant.map((restaurant) => (
                    <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant?.info?.id}>
                        {(restaurant?.info?.aggregatedDiscountInfoV3?.header!="")?<RestaurantCardPromoted resData={restaurant}/>:<RestaurantCard resData={restaurant} />}
                        </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;


