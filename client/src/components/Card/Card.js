import React from "react";
import { Row, Col } from "../Grid"; 
import "./Card.css";

const Card = props => (
    <Row>
        <Col size="md-6">
            <div class="card-panel teal">
                <Row>
                    <Col size="md-2">
                        <div class="card" id="user-card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img id="user-img" alt="user-img"class="activator" src="http://goodquotesword.com/images/94566/8pn_funny_profile_pictur.jpg"/>
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Johnny Glasses<i class="material-icons right"></i></span>
                                <p><a alt="unknown" href="/">Link to User Profile?</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">User Info<i class="material-icons right">x</i></span>
                                <br/>
                                <span>Johnny Glasses</span>
                                <br/>
                                <span>Username: jJohnson123</span>
                                <br/>
                                <span>Email: jjGlasses@fakeemail.com</span>
                                <br/>
                                <span>Address: 1234 5th St., Los Angeles, CA, 90012</span>
                                <br/>
                                <span>Rating: 4 stars (out of 20, lol)</span>
                            </div>
                        </div>
                {/* <span class="white-text">I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                </span> */}
                    </Col>
                    <Col size="md-2">
                        <div class="card" id="dog-card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img id="dog-img" alt="dog-img"class="activator" src="https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&h=350"/>
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Rex<i class="material-icons right"></i></span>
                                <p><a alt="unknown" href="/">Link to user profile?</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Dog Info<i class="material-icons right">x</i></span>
                                <br/>
                                <span>Tyrannosaurus-Rex</span>
                                <br/>
                                <span>Breed: Cute Dog</span>
                                <br/>
                                <span>Age: 6 months (puppy)</span>
                                <br/>
                                <span>Size: 10 lbs.</span>
                                <br/>
                                <span>Temperment: Sweet</span>
                                <br/>
                                <span>More Deets (About Me): Loves treats and dog parks</span>
                                <br/>
                                <span>Rating: 5 stars</span>
                                <br/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    </Row>    
    // <div 
    //     The below info was borrowed from another App until we know all the info that we are putting into the card.
    //     role="img"
    //     aria-label="click item"
    //     onClick={() => props.handleClick(props.id)}
    //     style={{ backgroundImage: `url("${props.image}")` }}
    //     className={`click-item${props.shake ? " shake" : ""}`}
    // />
);

export default Card;