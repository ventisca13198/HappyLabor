import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Alljobs from "./screens/Alljobs";
import PostJob from "./screens/postJob/PostJob";
import Package from "./screens/Package";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import EditPost from "./screens/postJob/EditPost";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Router>
        <NavigationBar />

        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/detail/:id" component={Detail} />
            <Route path="/jobs">
              <Alljobs />
            </Route>
            <Route path="/postJob">
              <PostJob />
            </Route>
            <Route path="/editPost/:id" component={EditPost} />
            <Route path="/package">
              <Package />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
