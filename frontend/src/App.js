import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/layout/Navigation";
import Body from "./Components/layout/Body";

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Body />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/users/activate/:token" component={UserActivate} />
        <Route path="/owner/activate/:token" component={OwnerActivate} />
        <Route path="/login" component={Login} />
        <Route path="/users/password/forget" component={UserForgotPassword} />
        <Route path="/users/password/reset/:token" component={UserReset} />
        <Route path="/owner/password/forget" component={OwnerForgotPassword} />
        <Route path="/owner/password/reset/:token" component={OwnerReset} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
