import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const Auth = useSelector(state => state.Auth);
    return (
        <Route
            {...rest}
            render={(props) =>
                !Auth.isAuth ? <Redirect to="/login" /> : <Component {...props} />
            }
        />
    );
};

export default PrivateRoute;