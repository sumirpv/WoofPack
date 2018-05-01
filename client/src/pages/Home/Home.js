import React, { Component } from "react";
import Modal from "../../components/SignupModal";
import Login from "../../components/Login"
import "./Home.css";
import { Footer, Icon, Slider, Slide, Parallax, Button, Row, Col } from "react-materialize";

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
                <div className="main-home">
                    <div className="buttons-div">
                        {this.props.loggedIn === true ? null : <button className={"home-btn sign-up"} onClick={this.clickSignupModal} > Sign up </button>}
                        {this.props.loggedIn === true ? null : <button className={"home-btn"} onClick={this.clickLoginModal} > Login </button>}
                    </div>
                    <div className='home-top'>
                        <h1 className="main-title"> Run with the Woofpack </h1>
                        {this.openSignupModal()}
                        {this.openLoginModal()}
                    </div>
                    <div className="home-pg">
                        <Slider className="slider-home" interval={15000}>
                            <Slide
                                src="https://www.protectivity.com/protectivity-blog/wp-content/uploads/sites/102/2015/09/dog-walking.jpg"
                                title="Tired of paying for dog sitters?">
                                <span className='slider-text'> Connect with closeby dog owners and eliminate expensive day care costs  </span>
                            </Slide>
                            <Slide
                                src="https://dingo.care2.com/pictures/greenliving/1404/1403349.large.jpg"
                                title="More fun for your pup close to home"
                            >
                                <span className='slider-text'> Find the perfect pal for your doggo to play with </span>
                            </Slide>
                            <Slide
                                src="https://www.professionalpetnanny.com/wp-content/themes/petnanny/images/cincinnati-dog-walking-slide.jpg"
                                title="Earn free dog sitting by helping your neighbors"
                                placement="right">
                                <span className='slider-text'> Walk or watch your neighbors' dogs to earn free care for your fur baby.  </span>
                            </Slide>
                            <Slide
                                src="https://www.puppyleaks.com/wp-content/uploads/2017/08/walkie.png"
                                title="The strength of the pack is the wolf, and the strength of the wolf is the pack"
                                placement="right">
                                <span className='slider-text'> Rest easy knowing the whole pack has your back </span>
                            </Slide>
                        </Slider>
                    </div>
                    <hr />
                    <Row>
                        <Col s={12} className="about">
                            <h3 className="more-info">  Why Join a Woofpack?   </h3>
                            <p>
                                We know that it can be stressful when you have to leave town, or stay late for work because your pup is counting on you!
                            </p>
                            <p>
                                Joining a Woofpack allows you to ensure your dog always gets the care they need, while getting to know and help your neighborhood dogs and humans. Sign up today and start enjoying the strength of the pack! 
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className='works-row'>
                        <Col s={12} className="works">
                            <div className="section footer">
                                <i class="material-icons">pets</i>
                                <h5 className="steps">Create your Pack</h5>
                                <p className="p-steps">Add packmembers based on distance, reviews, and dog size or temperment </p>
                            </div>
                            <div className="section">
                                <i class="material-icons">chat</i>
                                <h5 className="steps">Connect</h5>
                                <p className="p-steps">Chat with your pack to set up meet and greets. </p>
                            </div>
                            <div className="section">
                                <i class="material-icons">favorite</i>
                                <h5 className="steps">Let the fun begin!</h5>
                                <p className="p-steps">Have fun earning free dog sitting while meeting new friends and pups </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <footer className="page-footer">
                    <div className="footer-copyright">
                        <div className='row'>
                            <p className="grey-text text-lighten-4">Made with love &amp; React at the UCLA Coding Bootcamp</p>
                            <br />
                            <p> © 2018 Sumi - Ryan - Fredrik - Bianca</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Home;