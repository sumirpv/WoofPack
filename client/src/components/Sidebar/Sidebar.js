import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { SideNav, Button, SideNavItem, Icon } from 'react-materialize';

class Sidebar extends Component {
    constructor (props) {
        super (props)
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
                        name: this.props.userName,
                        // email: this.props.email
                    }}
                />
                {/* <SideNavItem
                    divider
                /> */}
                <SideNavItem>
                    <Link to="/profile">
                        Profile
                    </Link>
                <br></br>
                </SideNavItem>

                <SideNavItem>
                    <Link to="/findpack">
                        Grow Pack
                    </Link>
                </SideNavItem>

                <SideNavItem>
                    <Link to="/mypack">
                        My Pack
                    </Link>
                </SideNavItem>

                <SideNavItem>
                    <Button onClick={this.clickLogout}> Logout </Button>
                </SideNavItem>

            </SideNav>
        );    
    };
};

export default Sidebar;