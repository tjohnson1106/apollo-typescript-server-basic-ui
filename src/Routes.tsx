import * as React from "react";
import PureComponent = React.PureComponent;
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginView } from "./module/user/LoginView";
import { RegisterView } from "./module/user/RegisterView";
import { MeView } from "./module/user/MeView";

export class Routes extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/me" component={MeView} />
        </Switch>
      </BrowserRouter>
    );
  }
}
