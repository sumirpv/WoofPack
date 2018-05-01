import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { SideNav, Button, SideNavItem, Icon } from 'react-materialize';
import API from "../../utils/API.js";

function Redirect(where){
    window.location = where
}

class Sidebar extends Component {
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
            <SideNav
                className="sideNav"
                trigger={<Button><Icon>dehaze</Icon></Button>}
                options={{ closeOnClick: true }}
            >
                <SideNavItem userView
                    user={{
                        background: "http://www.pawculture.com/uploads/dog-walking-mistakes-card.jpg",
                        image: this.props.picture,
                        name: this.props.userName
                        // email: this.props.email
                    }}
                />
                {/* <SideNavItem
                    divider
                /> */}
                <SideNavItem>
                    <Link to="/profile" className="sidebar-text">
                        Profile
                    </Link>
                <br></br>
                </SideNavItem>

                <SideNavItem>
                    <Link to="/findpack" className="sidebar-text">
                        Grow Pack
                    </Link>
                </SideNavItem>

                <SideNavItem>
                    <Link to="/mypack" className="sidebar-text">
                        My Pack
                    </Link>
                </SideNavItem>

                <SideNavItem>
                    {/* <Button onClick={this.clickLogout}> Logout </Button> */}
                    {this.props.loggedIn === true ? <Button id="logoutBtn" onClick={this.clickLogout}
                        > Logout </Button>  :  null }
                </SideNavItem>

            </SideNav>
        );    
    };
};

export default Sidebar;