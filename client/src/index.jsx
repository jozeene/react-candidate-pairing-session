import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from "react-router-dom";
import {Users} from "./pages/users";
import {Home} from "./pages/home";
import {UserDetail} from "./pages/userDetail";
import {Post} from "./pages/post"

const router = (
  <Router>
    <Switch>
      <Route exact path="/users">
        <Users/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/users/:userId">
        <UserDetail/>
      </Route>
      <Route exact path="/posts/:postId">
        <Post/>
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(router, document.getElementById("app"));