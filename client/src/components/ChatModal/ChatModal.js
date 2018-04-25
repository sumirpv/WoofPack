import React from "react";
import io from 'socket.io-client';
var socket = io.connect('http://localhost:3001/');
var message;
var btn;
var output;
var feedback;
class ChatModal extends React.Component {
    state = {
        draftChat: "",
        oldChat:"",
        userName1:"sumi",
        userName2:"Bianca"
    }


    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSendChat = () => {
        //Query DOM
        message = document.getElementById('message');
        btn = document.getElementById('send');
        output = document.getElementById('output');
        feedback = document.getElementById('feedback');
        console.log("clicked", btn)


        socket.emit('chat', {
            message: this.state.draftChat
        });
            this.setState({
                draftChat: ""
            });


        socket.on('chat', function(data){
            output.innerHTML +=`<p> ${data.message} </p>`;
        });

        message.addEventListener('keypress', function(){
            socket.emit('typing',"sumi");
        })
        socket.on('typing', function(data){
            feedback.innerHTML=`<p><em> ${this.data}</em></p>`;
        })

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
                                                    <div id="output">wer </div>
                                                    <div id="feedback"> </div>
                                                </div>
                                                <input id="message" name ="draftChat" type="text" placeholder="Message" value ={this.state.draftChat} onChange={this.handleInputChange} />
                                                <button id="send" onClick={this.handleSendChat}> Send </button>
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