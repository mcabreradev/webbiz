import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Containers
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Error from "./components/Error";

// Components
import Logo from './components/Logo';
import Footer from './components/Footer';

import "bulma/css/bulma.css";
import "./App.css";


class App extends Component {
  render() {

    return (
      <Router>
        <div>

          <Logo/>

          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={Signup} />
            <Route component={Error} />
          </Switch>

          <Footer />

        </div>
      </Router>
    );

    
  }
}

export default App;
