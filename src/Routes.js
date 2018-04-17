import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Homepage from "./Views/Homepage";
import Dashboard from "./Views/Dashboard";
import Wizard1 from "./Views/Wizard1";
import Wizard2 from "./Views/Wizard2";
import Wizard3 from "./Views/Wizard3";
import Wizard4 from "./Views/Wizard4";
import Wizard5 from "./Views/Wizard5";


export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/Dashboard" component={Dashboard} />
    <Route path="/Wizard1" component={Wizard1} />
    <Route path="/Wizard2" component={Wizard2} />
    <Route path="/Wizard3" component={Wizard3} />
    <Route path="/Wizard4" component={Wizard4} />
    <Route path="/Wizard5" component={Wizard5} />
  </Switch>
);