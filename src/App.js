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
import Loader  from "./components/loader/loader";
const Home = lazy(() => import("./containers/home/home"));
const DetailsEvent = lazy(() => import("./containers/details-event/detail-event"));
const Secondary = lazy(() => import("./containers/details-event/secondary"));
const Third = lazy(() => import("./containers/details-event/third"));
function App() {
  return (
    <Router>
    <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={APP_ROUTES.HOME} component={Home}></Route>
          <Route path={APP_ROUTES.DETAILS_EVENT} component={DetailsEvent}></Route>
          <Route path={APP_ROUTES.SECONDARY} component={Secondary}></Route>
          <Route path={APP_ROUTES.THIRD} component={Third}></Route>
          <Redirect to={APP_ROUTES.HOME} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
