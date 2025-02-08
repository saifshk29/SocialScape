import React from "react";
import {useRoutes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

const ProjectRoutes =()=>{
    let element = useRoutes([
        {path: "/",element:<LandingPage/>},
        // {path:"*",element:<NotFound/>},
        
    ]);
    return element;
};

export default ProjectRoutes;