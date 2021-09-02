import React from "react";
import {Route, Redirect} from "react-router-dom";
import authenticationService from "../handlers/AuthenticationHandler.js";

const ProtectedRoute = ({component: Component, ...args}) => {
    return (<Route
            {...args}
            render={props => {
                if (authenticationService.isUserLoggedIn()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect to={{pathname: "/login"}}/>
                    );
                }
            }}
        />
    );
}

export default ProtectedRoute;
