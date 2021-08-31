import React from "react";
import { Route, Redirect } from "react-router-dom";
import authenticationService from "../handlers/AuthenticationService";

const ProtectedAdminRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (authenticationService.isUserLoggedIn() && authenticationService.isUserAdmin()) {
                    return <Component {...props} />;
                } else {
                    alert("Only admin can access this page");
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
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

export default ProtectedAdminRoute;
