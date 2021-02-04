import React, { Component } from "react";
import RoomCreatePage from "./RoomCreatePage";
import RoomJoinPage from "./RoomJoinPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
            <Route exact path='/'><p>Home Page</p></Route>
            <Route path='/join' component={RoomJoinPage}></Route>
            <Route path='/create' component={RoomCreatePage}></Route>
        </Switch>
      </Router>
    );
  }
}
