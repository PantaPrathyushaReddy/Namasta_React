import { MENU_API } from "./contants";
import { useState, useEffect } from "react";
const useRestaurantMenu=(resId)=>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

console.log(resId,"resID");

    const fetchMenu = async () => {

        const data = await fetch(MENU_API+resId.resid);
        const json = await data.json();
        setResInfo(json.data);
        
    }
return resInfo;
}
export default useRestaurantMenu;