import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { SideNav, Button, SideNavItem, Icon } from 'react-materialize';

class Sidebar extends Component {
    render() {
        return (
            <SideNav
                className="sideNav"
                trigger={<Button><Icon>dehaze</Icon></Button>}
                options={{ closeOnClick: true }}
            >
                <SideNavItem className="side" userView
                    user={{
                        background: "https://pics.me.me/woof-woof-give-me-seed-lol-7523100.png",
                        image: '{this.props.picture}',
                        name: '{this.props.firstname}',
                        email: '{this.props.email}'
                    }}
                />
                {/* <SideNavItem
                    divider
                /> */}
                <SideNavItem>
                    <Link to="/profile">
                        Profile
                    </Link> 
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