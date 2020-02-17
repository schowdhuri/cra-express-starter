import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import history from "../utils/history";
import App from "../components/App";

export default () => (<ConnectedRouter history={history}>
  <Switch>
    <Route path="/" exact>
      <App>
        <div>home page..</div>
      </App>}
    </Route>
  </Switch>
</ConnectedRouter>);
