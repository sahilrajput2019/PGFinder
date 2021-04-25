import React, { Fragment } from "react";
import {Route, Switch } from "react-router-dom";
import Main from "./Components/layout/Main";
import Register from "./Components/AuthScreens/Register";
import Activate from "./Components/AuthScreens/Activate";
import Login from "./Components/AuthScreens/Login";
import ForgotPassword from "./Components/AuthScreens/ForgotPassword";
import Reset from "./Components/AuthScreens/Reset";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/users/activate/:token" component={Activate} />
        <Route path="/login" component={Login} />
        <Route path="/users/password/forget" component={ForgotPassword} />
        <Route path="/users/password/reset/:token" component={Reset} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
