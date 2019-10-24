import React from "react";
import { Route, Redirect } from "react-router-dom";
import axiosWithAuth from "../data/axiosWithAuth";

/*
  Private Route rules:
  1. It has the same API as <Route />.
  2. It renders a <Route /> and passes all the props through to it.
  3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
*/
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const Component = props.component
  
  return (
    <Route
      {...rest}
      render={props =>
        axiosWithAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute