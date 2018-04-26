import React, { Component } from "react";
import RatingCoins from "./Rating-Coins";
import PersonalData from "./PersonalData";
import DogData from "./DogData";
import API from '../../utils/API.js'
import AddDogModal from "../AddDogModal";

class MyProfile extends Component {
    state = {
        user: "",
        addDogOpen: false,
        dogs: []
    };

    componentDidMount() {
        this.loadUser();
    };
    
    loadUser = () => {
        API.getUserData().then((result) =>{
            console.log("this is the result.data", result.data); 
            this.setState({user: result.data, dogs: result.data.dog}) 
            console.log("this is the state.user.dogs ",this.state.dogs); 
        })
           
    };
    
    // addDog () {
    //     console.log("cliiick");
    // }

    clickAddDogModal = () => {
        console.log(this.state.addDogOpen);
        console.log("add dog btn clicked");
        this.setState({
            addDogOpen: true
        });
        // console.log(this.state.addDogOpen);
    };
    
    initAddDogModal = () => {
        // console.log("clicked");
        // bring up the modal here
        console.log("initAdd func was hit");
        console.log(this.state.addDogOpen);
        if (this.state.addDogOpen === true) {
            return <AddDogModal
                header={"Add Dog to Your Pack"}
                closeModal = { this.closeModal}
            />
        };
    };

    closeModal = () => {
        console.log("close modal");
        this.setState({
            addDogOpen : false
        });
    };

    render= () => {
        return(
            <div>
                <RatingCoins />
                {this.initAddDogModal()}
                <PersonalData userData={this.createUserData} 
                    about={this.state.user.about}
                    address={this.state.user.address}
                    email={this.state.user.email}
                    firstname={this.state.user.firstname}
                    lastname={this.state.user.lastname}
                    phone={this.state.user.phone}
                    picture={this.state.user.picture}/>
                <div>
                    <button className="waves-effect waves-light btn" onClick={this.clickAddDogModal} ><i class="material-icons left">add_circle</i> Add your Dog </button>
                </div>
                {this.state.dogs.map(dog => {
                    return(
                        <DogData name={dog.dogName}
                        about={dog.aboutDog}
                        age={dog.age}
                        breed={dog.breed}
                        picture={dog.picture}
                        temperment={dog.temperment}
                        size={dog.size}/>
                    )
                })}
              

            </div>
        )
    }
}

export default MyProfile;