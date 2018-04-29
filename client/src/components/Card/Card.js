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
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="images/office.jpg" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>

                </div>

            </Roww>


        )

    }
};

export default Card;

