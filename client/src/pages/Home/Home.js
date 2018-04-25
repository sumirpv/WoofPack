import React, { Component } from "react";
import Modal from "../../components/SignupModal";
import Login from "../../components/Login"
import "./Home.css";
import SideNav from "react-materialize"

// import Row from "../../Grid/row.js"

class Home extends Component {
    state = {
        signUpOpen: false,
        loginOpen: false
    }

    clickSignupModal = () => {

        this.setState({
            signUpOpen: true
        })
    };

    clickLoginModal = () => {

        this.setState({
            loginOpen: true
        })
    };

    openSignupModal = () => {
        if (this.state.signUpOpen === true) {
            return <Modal
                header={"Sign Up"}
                closeModal={this.closeModal}
            />
        }
    }
    openLoginModal = () => {
        if (this.state.loginOpen === true) {
            return <Login
                header={"Login"}
                closeModal={this.closeLoginModal}
            />
        }
    }
    closeLoginModal = () => {
        console.log('close modal')
        this.setState({
            loginOpen: false
        })
    }

    closeModal = () => {
        console.log('close modal')
        this.setState({
            signUpOpen: false
        })
    }


    render() {
        return (
            <div>
            
                    <h1> WoofPack </h1>
                    <button onClick={this.clickSignupModal} > Sign up </button>
                    <button onClick={this.clickLoginModal} > Login </button>
             




                {this.openSignupModal()}
                {this.openLoginModal()}
            </div>
        )
    }
}

export default Home;