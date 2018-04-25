import React, { Component } from "react";
import Nav from "./components/Nav"
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import FindPack from "./pages/FindPack";
import MyPack from "./pages/MyPack";
import Wrapper from "./components/Wrapper"
import { BrowserRouter as Router, Route, Switch,  Redirect  } from "react-router-dom"
import API from './utils/API.js'

import "./App.css";

class App extends Component {
   state = {
        session: false

    };

  componentDidMount(){
    this.isLoggedIn(); 
  }

  isLoggedIn = () => {
    console.log("it hit")
    API.checkIfsession().then(res =>{
      console.log("this is response" + res.data)
      if (res.data === false){
        console.log("this is state" + this.state.session); 
      }
      if (res.data === true){
      this.setState({session:true})
      console.log("this is state" + this.state.session); 
      }
      
    }
    
    )
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Wrapper >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/profile" checkLogin={this.isLoggedIn()} render={this.state.session === false ?  <Redirect to="/"/> : <Profile/>} />
              <Route exact path="/findpack" component={FindPack} />
              <Route exact path="/mypack" component={MyPack} />

            </Switch>
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
