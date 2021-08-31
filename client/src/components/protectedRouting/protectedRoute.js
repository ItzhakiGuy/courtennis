import React from "react";
import {Route, Redirect} from "react-router-dom";
import authenticationService from "../handlers/AuthenticationService.js";

const ProtectedRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (authenticationService.isUserLoggedIn()) {
                    return <Component {...props} />;
                } else {
                    alert("You need to be logged in to do that");
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default ProtectedRoute;
