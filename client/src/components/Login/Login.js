import React, { Component } from "react";
import API from "../../utils/API.js";
import "./Login.css";

function Redirect(where){
    window.location = where
}

class Login extends Component {
constructor (props) {
    super (props)
}

    state = {
        username: "",
        password: ""
    }


    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

handleLogin = () => {
    var user = {
        username: this.state.username,
        password: this.state.password
    }
    if (user.username === "" || user.password === ""){
        alert("enter all fields")
    }
    else {
        API.userLogin(user).then((result) =>{
           if (result.data === true){
               Redirect('/profile'); 
           }
           if (result.data === false) {
               alert("wrong creds"); 
           }
           //console.log(result.data)
       })
   }
  
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
                                                <input value={this.state.username} name={"username"} onChange={this.handleInputChange} placeholder="User Name" id="username" type="text" className="validate">
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
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.handleLogin}>Login</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick = {this.props.closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}
export default Login

