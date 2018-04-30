import React, { Component } from "react";
import Modal from "../../components/SignupModal";
import Login from "../../components/Login"
import "./Home.css";
import { Slider, Slide, Parallax, Button, Row, Col } from "react-materialize";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

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
                            title="Never worry about your dog being lonely again"
                            placement="right">
                            <span className='slider-text'> Enjoy peace of mind knowing the whole pack has your back </span>

                        </Slide>
                    </Slider>
                </div>
                <hr />
                <Row>
                    <Col s={12} className="about">
                        <h3 className="more-info">  Why Join a Woofpack?   </h3>
                        <p>
                            We know that it can be stressful when you have to leave town, or stay late for work because your pup is counting on you! But day care is so expensive.
                        </p>
                       
                        <p>
                            Joining a Woofpack allows you to still ensure your dog always gets the care they need, while getting to know and help your neighborhood dogs and humans. Sign up today and start enjoying the strength of the pack!  </p>

                    </Col>
                </Row>

            </div>
        )
    }
}

export default Home;