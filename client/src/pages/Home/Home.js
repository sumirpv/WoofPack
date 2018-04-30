import React, { Component } from "react";
// import Modal from "../../components/SignupModal";
import Login from "../../components/Login"
import "./Home.css";
import { Slider, Slide, Parallax, Button, Modal } from "react-materialize";

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
            <div className="home-pg">
            
                    <h1> WoofPack </h1>

                    {this.props.loggedIn === true ? null :  <button onClick={this.clickSignupModal} > Sign up </button> }
                    {this.props.loggedIn === true ? null :  <button onClick={this.clickLoginModal} > Login </button> }
                    
                  

                
                {this.openSignupModal()}
                {this.openLoginModal()}
            {/* <Slider className="slider-home" fullscreen="true" interval={10000}> 
                <Slide
                    src="https://www.protectivity.com/protectivity-blog/wp-content/uploads/sites/102/2015/09/dog-walking.jpg"
                    title="This is our big Tagline!">
                    Here's our small slogan.
                    <button onClick={this.clickSignupModal} > Sign up </button>
                    <button onClick={this.clickLoginModal} > Login </button>
                     <Modal  
                        header='Modal Header'
                        fixedFooter
                        trigger={<Button>MODAL WITH FIXED FOOTER</Button>}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Modal>
                    {this.openSignupModal()}
                    {this.openLoginModal()} 
                </Slide>
                <Slide
                    src="https://dingo.care2.com/pictures/greenliving/1404/1403349.large.jpg"
                    title="Left aligned Caption"
                    // placement="left">
                    >
                    Here's our small slogan.
                    <button onClick={this.clickSignupModal} > Sign up </button>
                    <button onClick={this.clickLoginModal} > Login </button>   
                    {this.openSignupModal()}
                    {this.openLoginModal()}       
                </Slide>
                <Slide
                    src="https://www.professionalpetnanny.com/wp-content/themes/petnanny/images/cincinnati-dog-walking-slide.jpg"
                    title="Right aligned Caption"
                    placement="right">
                    Here's our small slogan.
                    <button onClick={this.clickSignupModal} > Sign up </button>
                    <button onClick={this.clickLoginModal} > Login </button>
                    {this.openSignupModal()}
                    {this.openLoginModal()} 
                </Slide>
                <Slide
                    src="https://www.puppyleaks.com/wp-content/uploads/2017/08/walkie.png"
                    title="Right aligned Caption"
                    placement="right">
                    Here's our small slogan.
                    <button onClick={this.clickSignupModal} > Sign up </button>
                    <button onClick={this.clickLoginModal} > Login </button>
                    {this.openSignupModal()}
                    {this.openLoginModal()} 
                </Slide>
                
                
            </Slider> 
            {/* <div>
                <Parallax imageSrc="https://www.professionalpetnanny.com/wp-content/themes/petnanny/images/cincinnati-dog-walking-slide.jpg"/>
                    <div className="section white">
                        <div className="row container">
                            <h2 className="header">Parallax</h2>
                            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                        </div>
                    </div>
                <Parallax imageSrc="https://www.protectivity.com/protectivity-blog/wp-content/uploads/sites/102/2015/09/dog-walking.jpg"/>
            </div>
            {this.openSignupModal()}
            {this.openLoginModal()} */}

            </div>
        )
    }
}

export default Home;