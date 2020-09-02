import React,{useContext } from 'react';
import { Route, Redirect} from 'react-router-dom';

import {AuthContext} from "./Auth";
const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const {authuser,userName}=useContext(AuthContext);
    console.log('From Private Route: ',userName)
    return (
        <Route
          {...rest}
          render={routeProps =>
            userName != ' ' ? (
              <RouteComponent {...routeProps} />
            ) : (
              <Redirect to={"/signIn"} />
            )
          }
        />
    );
};

export default PrivateRoute;