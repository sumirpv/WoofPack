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
    API.checkIfsession().then(res =>{
      if (res.data === true){
      this.setState({session: true})
      }
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Wrapper >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile" render={() => (this.state.session === true ? <Profile/> : <Home/>)} />
              <Route exact path="/findpack" 
                render={() => (this.state.session === true ? <FindPack/> : <Home/>)}/> 
              <Route exact path="/mypack" render={() => (this.state.session === true ? <MyPack /> : <Home/>)}/>
            </Switch>
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
