import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">/</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/detail">detail</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
