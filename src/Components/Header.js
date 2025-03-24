import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; // ✅ Correct import
import UserContext from "../utils/UserContext";
import Logo_url from "../../src/swiggy-transparent-icon-free-png.webp"
import { useSelector } from "react-redux";


const Header=()=>{
    const[btnName,setbtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loggedUser}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems ,"cartitems")
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg px-0 sm:bg-yellow-50 lg:bg-green-100" >
            <div className="logo-container">
                <img className="w-20" src={Logo_url}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus?"✅":"❌"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact US</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-l"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <button className="login" onClick={()=>{btnName==='Login'?setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
                    <li className="px-4 font-bold" >{loggedUser}</li>
                </ul>

            </div>

        </div>
    )
}
export default Header;