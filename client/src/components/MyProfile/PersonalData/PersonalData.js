import React, { Component } from "react";

class PersonalData extends Component {
   
    constructor(props){
        super(props); 
    }
    
    state = {
        firstName: "",
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
    
    handleClick =() => {
       this.props.userData(); 
    }

    

    render() {      
        return (
            <div className="row">
            <div className="col s12">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                        <form class="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input name="firstName" value={this.props.firstname} onChange={this.handleInputChange} id="firstName" type="text" className="validate" />
                                    
                                </div>
                                <div className="input-field col s6">
                                    <input name="lastName" value={this.props.lastname} onChange={this.handleInputChange} id="lastName" type="text" className="validate" />
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input name="phone"  value={this.props.phone} onChange={this.handleInputChange} id="phone" type="text" className="validate" />
                                    
                                </div>
                                <div className="input-field col s6">
                                    <input name="address"  value={this.props.address} onChange={this.handleInputChange} id="address" type="text" className="validate" />
                                    
                                </div>
                            </div>

                            <div className="row">
                                <div class="input-field col s12">
                                    <textarea name="aboutMe"  value={this.props.about} onChange={this.handleInputChange} id="aboutMe" className="materialize-textarea"></textarea>
                                    
                                </div>
                            </div>
                            <a onClick={this.handleClick}class="waves-effect waves-light btn">Save</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default PersonalData;
