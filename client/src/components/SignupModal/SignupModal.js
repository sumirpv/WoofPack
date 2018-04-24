import React, { Component } from "react";
import "./SignupModal.css";
import API from '../../utils/API.js'

class Modal extends Component {
constructor (props) {
    super (props)
}
    state = {
        name: "",
        username: "",
        email: "",
        password: ""
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    newUser = () => {
        console.log('new user ');
        var token = "t " + Math.random();
        //API call to post a new user in the database
        API.createUser({
            name: this.state.name,
            userName: this.state.username,
            email: this.state.email,
            password: this.state.password,
            token: token
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
                                <form className="col s12" method='POST' action='/api/human' encType='multipart/form-data'>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <div className="form-group">
                                                <input value={this.state.name} name={"name"} onChange={this.handleInputChange} placeholder="Your Name" id="first-name" type="text" className="validate">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.username} name={"username"} onChange={this.handleInputChange} placeholder="User Name" id="username" type="text" className="validate">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.email} name={"email"} onChange={this.handleInputChange} placeholder="Email" id="email" type="text" className="validate">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.password} name={"password"} onChange={this.handleInputChange} placeholder="Password" id="password" type="password" className="validate">
                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.newUser}>Submit</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick = {this.props.closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}
export default Modal