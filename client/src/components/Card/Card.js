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
            dogs: []
        }
    }


    componentDidMount() {
        API.checkIfsession().then(res => {
            console.log("this is res.data when check session", res.data);
            if (res.data.auth === true) {
                this.setState({
                    session: true,
                    userName1: res.data.username,
                    dogs: this.props.dog
                })
            }
        });

        this.setState({
            userName2: this.props._id
        })

    }

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
        console.log('close modal')
        this.setState({
            chatOpen: false
        })
    };

    addPack = () => {
        console.log('add pack clicked');
        var usernameObj = { username: this.state.userName2 };

        API.addPack(usernameObj).then(res => {
            console.log('added pack member');
        })
    };



    render() {
        // console.log(this.props);
        return (
        <div>
            <Roww>
                <div className="col s6">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={this.props.picture} />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{this.props.firstname + " " + this.props.lastname}<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{this.props.firstname + " " + this.props.lastname}<i className="material-icons right">close</i></span>
                            <span><b>Username:</b>{this.props.username}</span>
                            <br />
                            <span><b>Email: </b>{this.props.email}</span>
                            <br />
                            <span><b>Phone: </b>{this.props.phone}</span>
                            <br />
                            <span><b>Address: </b>{this.props.address}</span>
                            <br />
                        </div>
                    </div>
                </div>

               <div className="col s6">
                    {/* //if no dogs then show default dog info */}
                    {this.state.dogs.length === 0 ? (<p> no dog </p>) : 
                        //if dogs, then map over dogs array and show all dogs
                        (<div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={this.state.dogs[0].picture} />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{this.state.dogs[0].dogName}<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{this.state.dogs[0].dogName}<i className="material-icons right">close</i></span>
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
                        </div>
                    </div>
                    )}
                </div>
             </Roww>
             <Roww>
                <Ratings id={this.props._id} />

                    {this.props.cardtype === "findpack" ? < Button onClick={this.addPack} />
                        : null}
                    {this.props.cardtype === "mypack" ? <SendCoin id={this.props._id} />
                        : null}
                    {this.props.cardtype === "mypack" ? <button onClick={this.clickChatModal} > Send a Chat </button>
                        : null}
            </Roww>
            {this.openChatModal()}
        </div>


        )

    }
};

export default Card;

