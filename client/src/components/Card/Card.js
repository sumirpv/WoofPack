import React, { Component } from "react";
import { Row, Col } from "../Grid"; 
import Button from "../Button";
import ChatModal from "../ChatModal"
import "./Card.css";

class Card extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        chatOpen: false
    }


    clickChatModal = () => {

        this.setState({
            chatOpen: true
        })
    };

   openChatModal = () => {
        if (this.state.chatOpen === true) {
            return <ChatModal
                header={"Chat"}
                closeModal={this.closeModal}
            />
        }
    }

    closeModal = () => {
        console.log('close modal')
        this.setState({
            chatOpen: false
        })
    }

    render(){
        return(
    <Row>
        <Col size="md-6">
            <div className="card-panel">
                <Row>
                    <Col size="md-2">
                        <div className="card" id="user-card">
                            <div className="card-image waves-effect waves-block waves-light">
                                {/* <img id="user-img" alt="user-img"className="activator" src="http://goodquotesword.com/images/94566/8pn_funny_profile_pictur.jpg"/> */}
                                <img id="user-img" alt="user-img"className="activator"   src={this.props.picture}/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{this.props.firstname +" "+ this.props.lastname}<i className="material-icons right"></i></span>
                                <p><a alt="unknown" href="/">Link to User Profile?</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">User Info<i className="small material-icons right">cancel</i></span>
                                <br/>
                                {/* <span><b>Name: </b>Johnny Glasses</span>
                                <br/> */}
                                <span><b>Username: </b>{this.props.username}</span>
                                <br/>
                                <span><b>Email: </b>{this.props.email}</span>
                                <br/>
                                <span><b>Phone: </b>{this.props.phone}</span>
                                <br/>
                                <span><b>Address: </b>{this.props.address}</span>
                                <br/>
                                <span><b>Rating: </b>{this.props.rating}</span>
                                <br/>
                                <span><b>Dog Coin: </b>{this.props.dogCoin}</span>
                            </div>
                        </div>
                {/* <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                </span> */}
                    </Col>
                    <Col size="md-2">
                        <div className="card" id="dog-card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img id="dog-img" alt="dog-img"className="activator" src="https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&h=350"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Rex<i className="material-icons right"></i></span>
                                <p><a alt="unknown" href="/">Link to user profile?</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Dog Info<i className="small material-icons right">cancel</i></span>
                                <br/>
                                <span><b>Tyrannosaurus-Rex</b></span>
                                <br/>
                                <span><b>Breed: </b>Cute Dog</span>
                                <br/>
                                <span><b>Age: </b>6 months (puppy)</span>
                                <br/>
                                <span><b>Size: </b>10 lbs.</span>
                                <br/>
                                <span><b>Temperment: </b>Sweet</span>
                                <br/>
                                <span><b>More Deets (About Me): </b>Loves treats and dog parks</span>
                                <br/>
                                <span><b>Rating: </b>5 stars</span>
                                <br/>
                            </div>
                        </div>
                        <button onClick={this.clickChatModal} > Send a Chat </button>
                        <Button/>
                    </Col>
                </Row>
            </div>
        </Col>
        {this.openChatModal()}
    </Row>    
    // <div 
    //     The below info was borrowed from another App until we know all the info that we are putting into the card.
    //     role="img"
    //     aria-label="click item"
    //     onClick={() => this.props.handleClick(this.props.id)}
    //     style={{ backgroundImage: `url("${this.props.image}")` }}
    //     className={`click-item${this.props.shake ? " shake" : ""}`}
    // />
            )

            }
            };

export default Card;