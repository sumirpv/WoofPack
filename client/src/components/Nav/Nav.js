import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../../utils/API.js";
import "./Nav.css";

function Redirect(where){
    window.location = where
}

class Nav extends Component {
constructor (props) {
    super (props)
}

    clickLogout = () => { 
        API.logout()
        .then(res => {
            Redirect('/');
        });

    }

    render() {
        return (
            <div>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src="https://pics.me.me/woof-woof-give-me-seed-lol-7523100.png" alt="hello" />
                            </div>
                            <a href="#!user"><img className="circle" src={this.props.picture} alt="PFP" /></a>
                            <a href="#!name"><span className="white-text name">{this.props.firstname}</span></a>
                            <a href="#!email"><span className="white-text email">{this.props.email}</span></a>
                        </div>
                    </li>
                    <li>
                        <Link to="/profile">
                            Profile
                        </Link>   
                    </li>
                    <li>
                        <Link to="/findpack">
                            Grow Pack
                        </Link>
                    </li>
                    <li>
                        <Link to="/mypack">
                            My Pack
                        </Link>
                    </li>
                    <li>
                        <button onClick={this.clickLogout} > Logout </button>
                    </li>
                </ul>
                <a data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        )
    }
    
} 



export default Nav;

