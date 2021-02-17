import React, { useEffect } from "react";
import { connect } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as Routes from "./Routes";
import "styles/style.css";
import "antd/dist/antd.css";

const Root = () => {
  useEffect(() => {}, []);
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Routes.Home />} />
          <Route
            path="/singleMovie/:id?/"
            render={() => <Routes.SingleMovie />}
          />
        </Switch>
      </HashRouter>
    </>
  );
};

export default connect(null, {})(Root);
