import React from "react";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import Auth from "../context/Auth";

import { Route } from "react-router-dom";

const AuthRoute = ({path, component}) => {
    const {isAuthenticated} = useContext(Auth);
    
    return isAuthenticated ? (
    <Route exact  path={path} component={component}/>
    ): (
        <Redirect to="/login" />
    )

}

export default AuthRoute;