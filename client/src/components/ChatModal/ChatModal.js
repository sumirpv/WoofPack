import React from "react";
import io from 'socket.io-client';
import API from '../../utils/API.js'
import "./ChatModal.css";

var socket = io.connect('http://localhost:3001/');
var message;
var btn;
var output;
var feedback;
var username;
var room = Math.random();

class ChatModal extends React.Component {
    state = {
        draftChat: "",
        oldChat: [],
        userName1: "",
        userName2: this.props.userName2,
        otherUsertyping: ""
    }

    componentDidMount() {
        API.checkIfsession().then(res => {
            if (res.data.auth === true) {
                this.setState({
                    session: true,
                    userName1: res.data.username,
                })
            }
        })

        //Listen for incoming messages from server
        socket.on('chat', (data) => {
            //push messages received from server into array on state 
            this.setState({
                oldChat: [...this.state.oldChat, `${data.username} : ${data.message}`]
            });
        });

        //When chat loads, join a chat room. 
        socket.emit('room', room);

        //Whenever there is typing, send this info to the server. 
        socket.emit("typing", { username: this.state.userName1 });

        //When typing feedback comes from server, display this to user
        socket.on("typing", (data) => {
            //add this info to state typing
            this.setState({
                otherUsertyping: `${data.username} is typing`
            })
            // feedback.innerHTML = `<p> <em>${data.username} </em> is typing`
        });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSendChat = () => {
        //Query DOM
        message = document.getElementById('message');
        btn = document.getElementById('send');
        output = document.getElementById('output');
        feedback = document.getElementById('feedback');
        feedback.innerHTML = ' ';
        room = 'abc123';
        this.addChatDB(this.state.userName1, this.state.userName2, message.value)
        //send chat to server
        socket.emit('chat', {
            message: this.state.draftChat,
            username: this.state.userName1
        });
    };

    addChatDB = (user1, user2, msgbody) => {
        API.addChat({
            userName1: user1,
            userName2: user2,
            body: msgbody
        });
    }

    render() {
        return (
            <div class="modal" tabIndex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{this.props.header}</h5>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col s12" >
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <div id="article-chat">
                                                <div id="chat-window">
                                                    <h6>Messages </h6>
                                                    {this.state.oldChat.map(chat => {
                                                        return (
                                                            <div class="output"> {chat}
                                                            </div>
                                                        )
                                                    })}

                                                    <div id="feedback"> </div>
                                                </div>

                                                <input id="message" name="draftChat" type="text" placeholder="Message" value={this.state.draftChat} onChange={this.handleInputChange} />
                                                <button className="home-btn" id="send" onClick={this.handleSendChat}> Send </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.props.closeModal}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ChatModal;