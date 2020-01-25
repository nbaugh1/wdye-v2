import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import Profile from './components/Profile';
import history from './utils/history';
import { Router, Route, Switch } from "react-router-dom";

function App() {
  

  return (
    <div className="App">
    <Router>
        <header>
          <NavBar />
        </header>

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;