import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client"

import reslogo from "../images/reslogo.jpg"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestroMenuComponent from "./components/RestroMenuComponent";
import Demo from "./components/Demo";


const Grocery =lazy(()=>import("./components/Grocery"));

const AppLayout=()=>{
    return(<div className="app">
    <Header />
   <Outlet />
    </div>
    )
}
const appRouter=createBrowserRouter([
{
path:"/",
element:<AppLayout/>,

children: [
    {
    path:"/",
    element:<Body/>
    },
    {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contactus",
        element:<ContactUs/>,
    },
    {
        path:"/restaurants/:resId",
        element:<RestroMenuComponent/>
    },
    {
        path:"/grocery",
        element:<Suspense fallback={<h2>loading....</h2>}><Grocery /></Suspense>
    },
    {
        path:"/demo",
        element:<Demo />
    }
    ],
    errorElement:<Error />,
},
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);