import React from "react";
import NavBar from "./components/NavBar";
import Profile from './components/Profile';
import history from './utils/history';
import { Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={ Profile } />
        </Switch>
      </Router>
    </div>

  );
}

export default App;