import React from "react";
// import { Dropdown, Button, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

const NavHeader = props => (
    <div>
        <nav>
            <div className="nav-wrapper">
                <Link className="brand-logo center" to="/">
                    Woof Pack
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/" className="nav-link">
                            <i className="material-icons">home</i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="nav-link">
                            <i className="material-icons">account_box</i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" className="nav-link">
                            Logout 
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/mypack" className="nav-link">
                            My Pack
                        </Link>
                    </li>
                    <li>
                        <Link to="/findpack" className="nav-link">
                            Grow Pack
                        </Link>
                    </li>
                    <li>
                        <Dropdown trigger={
                            <Button>Drop me!</Button>
                        }>
                            <NavItem>one</NavItem>
                            <NavItem>two</NavItem>
                            <NavItem divider />
                            <NavItem>three</NavItem>
                        </Dropdown>
                    </li> */}
                </ul>
            </div>
        </nav>
    </div>
);

export default NavHeader;