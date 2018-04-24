import React, { Component } from "react";
import {Carousel} from 'react-materialize';
import Modal from "../../components/SignupModal";
import Login from "../../components/Login"

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
            header = {"Sign Up"}
            closeModal = {this.closeModal}
            />
        }
    }
    openLoginModal = () => {
        if (this.state.loginOpen === true) {
            return <Login
            header = {"Login"}
            closeModal = {this.closeLoginModal}
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
                <h1> this is the home page </h1>
                {/* <Carousel
                    fixedItem={<button className='btn'>MORE</button>}
                    options={{ fullWidth: true }}
                    images={[
                        'https://lorempixel.com/800/400/food/1',
                        'https://lorempixel.com/800/400/food/2',
                        'https://lorempixel.com/800/400/food/3',
                        'https://lorempixel.com/800/400/food/4',
                        'https://lorempixel.com/800/400/food/5'
                    ]}
                /> */}

                <button onClick = {this.clickSignupModal} > Sign up </button>
                <button onClick = {this.clickLoginModal} > Login </button>
                {this.openSignupModal()}
                {this.openLoginModal()}
            </div>
        )
    }
}

export default Home;