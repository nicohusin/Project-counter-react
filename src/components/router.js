import React, { Fragment } from "react";
import SignUp from "./signup";
import SignIn from "./signin";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import TabPanel from "./tabs";

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("isLoggedin",'asd') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
             
          />
        )
        
      }
    />
  );
}

const AppRouter = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/formikform">Formik Form</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <PrivateRoute path="/formikform" component={TabPanel} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default AppRouter;
