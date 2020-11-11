import React, { Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import { history } from "./utils/utils";
import PrivateRoute from "./components/common/PrivateRoute";

const Layout = React.lazy(() => import("./components/common/Layout"));
const ProsConsList = React.lazy(() => import("./components/ProsConsList"));

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Suspense fallback={<div />}>
          <Switch>
            <Layout>
              <Switch>
                <PrivateRoute exact path="/" component={ProsConsList} />
                <Redirect from="*" to="/" />
              </Switch>
            </Layout>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
