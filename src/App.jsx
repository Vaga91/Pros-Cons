import React, { Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import store from "./redux/store";
import { history } from "./utils/utils";
import ErrorModal from "./components/common/ErrorModal";
import PrivateRoute from "./components/common/PrivateRoute";

const Layout = React.lazy(() => import("./components/common/Layout"));
const ProsConsList = React.lazy(() => import("./components/ProsConsList"));

const App = () => {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
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
          <ErrorModal />
        </Provider>
      </I18nextProvider>
    </div>
  );
};

export default App;
