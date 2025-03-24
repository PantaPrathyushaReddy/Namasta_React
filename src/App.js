import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"; 
import '../index.css';
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
import Error from "./Components/Error.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import YourMindRestaurantMenu from "./Components/YourMindRestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./Components/Cart.js";
//Chunking
//code splitting
//Dynamic Bundling
//Lazy loading(this lazy loading code not render when page loades if click that component then only it will loaded on we have create two different js files spliting your)
//on demand loading

const Grocery=lazy(()=>import("./Components/Grocery.js"));
const AppLayout=()=>{

    const[userName,setUserName]=useState();
    useEffect(()=>{
        //Make an API call and send username and password
        const data={
            name:"Prathyusha"
        }
        setUserName(data.name);
    },[])
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedUser:userName,setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
         </Provider>
    )
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,

            },
            
                {
                    path:"/about",
                    element:<About/>,
                },
                {
                    path:"/contact",
                    element:<Contact/>,
                },
                {
                    path:"/grocery",
                    element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
                },
                {
                    path:"/restaurants/:resid",
                    element:<RestaurantMenu/>
                },
                {
                    path:"/yourMindRestaurant/:entityId",
                    element:<YourMindRestaurantMenu/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                }
            
        ],
        errorElement:<Error/>,
    },
    
]

)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);



