import React, { Component } from "react";



class PersonalData extends Component {
    state = {
        firstName:"",
        lastName: "",
        phone: "",
        address: "",
        aboutMe: "",

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };



    render() {      
        return (
            <div className="row">
            <div className="col s12">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                        <form class="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input name="firstName" value={this.state.firstName} onChange={this.handleInputChange} id="firstName" type="text" className="validate" />
                                    <label for="firstName">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input name="lastName" value={this.state.lastName} onChange={this.handleInputChange} id="lastName" type="text" className="validate" />
                                    <label for="lastName">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input name="phone"  value={this.state.phone} onChange={this.handleInputChange} id="phone" type="text" className="validate" />
                                    <label for="phone">Phone number</label>
                                </div>
                                <div className="input-field col s6">
                                    <input name="address"  value={this.state.address} onChange={this.handleInputChange} id="address" type="text" className="validate" />
                                    <label for="address">Address</label>
                                </div>
                            </div>

                            <div className="row">
                                <div class="input-field col s12">
                                    <textarea name="aboutMe"  value={this.state.aboutMe} onChange={this.handleInputChange} id="aboutMe" className="materialize-textarea"></textarea>
                                    <label for="aboutMe">About Me</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default PersonalData;
