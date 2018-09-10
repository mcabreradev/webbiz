import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { injectGlobal } from "styled-components";

// Containers
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Forgot from "./containers/Forgot";
import Verify from "./containers/Verify";
import Error from "./components/Error";

// Styles
import "bulma/css/bulma.css";
import "./App.css";
import background from "./static/img/hw-bg.jpg";
injectGlobal `
  body {
    background-image: url(${background});
  }
`;

class App extends Component {
  render() {

    return (
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={Signup} />
          <Route exact path={`${process.env.PUBLIC_URL}/forgot`} component={Forgot} />
          <Route exact path={`${process.env.PUBLIC_URL}/verify`} component={Verify} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
