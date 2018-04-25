import React from "react";
import Nav from "./components/Nav"
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import FindPack from "./pages/FindPack";
import MyPack from "./pages/MyPack";
import Wrapper from "./components/Wrapper"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




import "./App.css";

const App = () => (
  <Router>
    <div>
    {/* <Sidebar /> */}
      <Nav /> 
      <Wrapper >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/findpack" component={FindPack} />
          <Route exact path="/mypack" component={MyPack} />

        </Switch>
      </Wrapper>
    </div>


  </Router>
)

export default App;
