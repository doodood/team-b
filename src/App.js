import React, { Fragment, lazy, Suspense } from "react";
//import logo from './logo.svg';
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { APP_ROUTES } from "./utils/route-config";
const Home = lazy(() => import("./containers/home/home"));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={APP_ROUTES.HOME} component={Home}></Route>
          <Redirect to={APP_ROUTES.HOME} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
