import React, { Component } from "react";
import { Roww, Col } from "../Grid";
import Button from "../Button";
import ChatModal from "../ChatModal"
import SendCoin from "./SendCoin"
import "./Card.css";
import { Input, Row } from "react-materialize"
import API from "../../utils/API.js";
import Ratings from "./Ratings"



class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chatOpen: false,
            userName1: "",
            userName2: "",
            dogs: [],
            showcard: true
            
        }
    }
    componentDidMount() {
        API.checkIfsession().then(res => {
            if (res.data.auth === true) {
                this.setState({
                    session: true,
                    userName1: res.data.username,
                    dogs: this.props.dog
                })
            }
        });

        this.setState({
            userName2: this.props._id,
            showcard: true
        })

    };

    

    clickChatModal = () => {

        this.setState({
            chatOpen: true
        })
    };

    openChatModal = () => {
        if (this.state.chatOpen === true) {
            return <ChatModal
                username2={this.props.username}
                header={"Chat"}
                closeModal={this.closeModal}
            />
        }
    }

    closeModal = () => {
        this.setState({
            chatOpen: false
        })
    };

    addPack = () => {
        var usernameObj = { username: this.state.userName2 };

        API.addPack(usernameObj).then(res => {
        });

        this.setState({
            showcard: false
        })
    };

    



    render() {

            return (
            <Roww >
                <Col className = "card-box" size="md-6">

                    {this.state.showcard === true ? 
                    <div className="card-panel" >
                        <Roww>
                            <Col size="md-2">
                                <div className="card" id="user-card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        {/* <img id="user-img" alt="user-img"className="activator" src="http://goodquotesword.com/images/94566/8pn_funny_profile_pictur.jpg"/> */}
                                        <img id="user-img" alt="user-img" className="activator" src={this.props.picture} />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">{this.props.firstname + " " + this.props.lastname}<i className="material-icons right"></i></span>
                                        <p> Click image for more info </p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">User Info<i className="small material-icons right">cancel</i></span>
                                        <br />

                                        <span><b>Username: </b>{this.props.username}</span>
                                        <br />
                                        <span><b>Email: </b>{this.props.email}</span>
                                        <br />
                                        <span><b>Phone: </b>{this.props.phone}</span>
                                        <br />
                                        <span><b>Address: </b>{this.props.address}</span>
                                        <br />
                                        <br />
                                        <span><b>Dog Coin: </b>{this.props.dogCoin}</span>
                                    </div>
                                </div>

                            </Col>


                            <Col size="md-2">
                            {/* //if no dogs then show default dog info */}
                                {this.state.dogs.length === 0 ? (<div className="card" id="dog-card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img id="dog-img" alt="dog-img" className="activator" src="https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">REX<i className="material-icons right"></i></span>
                                        <p> Click image for more info </p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Dog Info<i className="small material-icons right">cancel</i></span>
                                        <br />
                                        <span><b>Tyrannosaurus-Rex</b></span>
                                        <br />
                                        <span><b>Breed: </b>Cute Dog</span>
                                        <br />
                                        <span><b>Age: </b>6 months (puppy)</span>
                                        <br />
                                        <span><b>Size: </b>10 lbs.</span>
                                        <br />
                                        <span><b>Temperment: </b>Sweet</span>
                                        <br />
                                        <span><b>More Deets (About Me): </b>Loves treats and dog parks</span>
                                        <br />
                                        <span><b>Rating: </b>5 stars</span>
                                        <br />
                                    </div>
                                </div>) : (
                                //if dogs, then map over dogs array and show all dogs
                                 ((<div className="card" id="dog-card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img id="dog-img" alt="dog-img" className="activator" src={this.state.dogs[0].picture} />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">{this.state.dogs[0].dogName}<i className="material-icons right"></i></span>
                                     
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Dog Info<i className="small material-icons right">cancel</i></span>
                                        <br />
                                        <span><b>About this doggo</b></span>
                                        <br />
                                        <span><b>Breed: </b>{this.state.dogs[0].breed}</span>
                                        <br />
                                        <span><b>Age: </b>{this.state.dogs[0].age}</span>
                                        <br />
                                        <span><b>Size: </b>{this.state.dogs[0].size}</span>
                                        <br />
                                        <span><b>Temperment: </b>{this.state.dogs[0].temperment}</span>
                                        <br />
                                        <span><b>More Deets (About Me): </b>{this.state.dogs[0].aboutDog}</span>
                                        <br />
                                        <span><b>Rating: </b>5 stars</span>
                                        <br />
                                    </div>
                                </div>))
                                // )}
                                )}
                            </Col>
                        </Roww>
                        <Row style={{marginBottom:"-3%"}}>
                            <Col size="md-2">
                                <div className="rating-area">
                                    <span id="rating-header">Rating:</span>
                                    {this.props.cardtype === "findpack" ? <Ratings  readonly={true}
                                    userRating={this.props.rating} id={this.props._id} />
                                        : null}
                                    {this.props.cardtype === "mypack" ?  <Ratings readonly={false} userRating={this.props.rating} id={this.props._id} />
                                        : null}
                                    
                                </div>
                            </Col>
                            <Col size="md-2"> 
                                <div className="coin-area">
                                    {this.props.cardtype === "findpack" ? < Button onClick={this.addPack} />
                                        : null}
                                    {this.props.cardtype === "mypack" ? <SendCoin id={this.props._id} />
                                        : null}
                                </div>
                            </Col>
                        </Row>
                        <Roww>
                            <Col size="md-12">
                                <div className="chat-btn-area">
                                    {this.props.cardtype === "mypack" ? <button  id ="chat-btn" onClick={this.clickChatModal} > Send a Chat </button>
                                        : null}
                                </div>

                            </Col>
                        </Roww>
                    </div> : null
                    }
                </Col>
                {this.openChatModal()}

            </Roww>
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