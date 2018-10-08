import * as React from "react";
import PureComponent = React.PureComponent;
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { LoginView } from "./modules/user/LoginView";
import { RegisterView } from "./modules/user/RegisterView";
import { Account } from "./modules/account/Account";
import { PaidUsers } from "./modules/account/PaidUsers";
import { Header } from "./shared/Header";

// TODO build proper home page
// REMEMBER look for support issues with <> </> they = React.Fragment

export class Routes extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <div>
            <Switch>
              <Route path="/login" component={LoginView} />
              <Route path="/register" component={RegisterView} />
              <Route path="/account" component={Account} />
              <Route path="/paid-users" component={PaidUsers} />
              <Route path="/" render={() => <div>Home Page</div>} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    );
  }
}
