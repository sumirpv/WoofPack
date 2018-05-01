import React, { Component } from "react";
import "./PersonalData.css";
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
            <div className="row" style={{fontSize:"20px"}}>
            <div className="col s12">
                <div className="profile-card card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                        <form class="col s12">
                            <div className="row about-row">
                            <h3 className="profile-header"> About You </h3>
                                <div className="input-field col s6"> 
                                <i class="material-icons">face</i>
                                    <div class="input-field inline" className="profile-text">
                                    <input name="firstName" value={this.props.firstname} onChange={this.handleInputChange} id="firstName" type="text" className="validate" />
                                    </div>
                                </div>
                                <div className="input-field col s6"> 
                                <div class="input-field inline" className="profile-text">
                                    <input name="lastName" value={this.props.lastname} onChange={this.handleInputChange} id="lastName" type="text" className="validate" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6"><i class="material-icons">contact_phone</i>
                               
                                <div class="input-field inline" className="profile-text">
                                    <input name="phone"  value={this.props.phone} onChange={this.handleInputChange} id="phone" type="text" className="validate" />
                                 </div>   
                                </div>
                                <div className="input-field col s6" className="profile-text"><i class="material-icons">home</i>
                                <div class="input-field inline">
                                    <input name="address"  value={this.props.address} onChange={this.handleInputChange} id="address" type="text" className="validate" />
                                   </div> 
                                </div>
                            </div>

                            <div className="row">
                                <div class="input-field col s12">About me:
                                <div class="input-field inline about">
                                    <textarea name="aboutMe"  value={this.props.about} onChange={this.handleInputChange} id="aboutMe" className="materialize-textarea "></textarea>
                                    </div>
                                </div>
                            </div>
                            <a onClick={this.handleClick}class="waves-effect waves-light btn " id="btnSave">Save</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default PersonalData;
