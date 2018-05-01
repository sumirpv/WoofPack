import React, { Component } from "react";
import RatingCoins from "./Rating-Coins";
import PersonalData from "./PersonalData";
import DogData from "./DogData";
import API from '../../utils/API.js'
import AddDogModal from "../AddDogModal";
import "./MyProfile.css";


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
            this.setState({user: result.data, dogs: result.data.dog}) 
        })
           
    };
    


    clickAddDogModal = () => {
  
        this.setState({
            addDogOpen: true
        });
     
    };
    
    initAddDogModal = () => {

        if (this.state.addDogOpen === true) {
            return <AddDogModal
                header={"Add Dog to Your Pack"}
                closeModal = { this.closeModal }
            />
        };
    };

    closeModal = () => {
        this.setState({
            addDogOpen : false
        });
    };

    render= () => {
        return(
            <div>
                <h1 className="main-title"> {this.state.user.username}'s Profile </h1>
                <RatingCoins rating= {this.state.user.rating} dogCoin={this.state.user.dogCoin} />
                {this.initAddDogModal()}
                <PersonalData userData={this.createUserData} 
                    about={this.state.user.about}
                    address={this.state.user.address}
                    email={this.state.user.email}
                    firstname={this.state.user.firstname}
                    lastname={this.state.user.lastname}
                    phone={this.state.user.phone}
                    picture={this.state.user.picture}
                    />
                <div className="row">
                    <button className="waves-effect waves-light btn" id="addDog" onClick={this.clickAddDogModal} ><i class="material-icons left" >add_circle</i> Add your Dog </button>
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