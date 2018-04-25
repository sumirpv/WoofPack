import React, { Component } from "react";
import "./SignupModal.css";
import API from '../../utils/API.js'

class Modal extends Component {
    constructor() {
        super()
    }
    state = {
        firstname: "",
        lastname: "",
        address: "",
        selected: "",
        username: "",
        email: "",
        password: "",
        avatar: ""
    }

    handleInputChange = (event) => {
        switch (event.target.name) {
            case 'avatar':
                this.setState({
                    avatar: event.target.files[0]
                })
                console.log(event.target.files[0])
                break;
            default:
                const { name, value } = event.target;
                this.setState({
                    [name]: value
                })
        }
    }

    onSubmit = (event) => {
        console.log('form submitted');
        event.preventDefault();

        const { firstname, lastname, address, phone, about, username, email, password, avatar } = this.state;
        let formData = new FormData();

        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('about', about);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('username', username);
        formData.append('avatar', avatar);
        var token = "t " + Math.random();
        formData.append('token', token);

        

        API.createUser(formData).then((result) => {
            console.log(result)
        });
    };

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
                                <form className="col s12" onSubmit={this.onSubmit} encType='multipart/form-data'>
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
                                            <div className="form-group">
                                                <input value={this.state.image} name={"avatar"} onChange={this.handleInputChange} id="avatar" type="file">
                                                </input>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-secondary" data-dismiss="modal">Submit</button>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.props.closeModal}>Close</button>
                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }


}
export default Modal