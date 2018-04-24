import React, { Component } from "react";
import "./SignupModal.css";
import API from '../../utils/API.js'

class Modal extends Component {
constructor (props) {
    super (props)
}
    state = {
        firstname: "",
        lastname: "",
        address: "",
        about: "",
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
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
            phone: this.state.phone,
            about: this.state.about,
            username: this.state.username,
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
                                                <input value={this.state.firstname} name={"firstname"} onChange={this.handleInputChange} placeholder="First Name" id="first-name" type="text" className="validate">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.lastname} name={"lastname"} onChange={this.handleInputChange} placeholder="Last Name" id="last-name" type="text" className="validate">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.address} name={"address"} onChange={this.handleInputChange} placeholder="Address" id="address" type="text" className="validate">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.phone} name={"phone"} onChange={this.handleInputChange} placeholder="Phone" id="phone" type="text" className="validate">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.about} name={"about"} onChange={this.handleInputChange} placeholder="about" id="about" type="text" className="validate">
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