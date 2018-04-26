import React, { Component } from "react";
import RatingCoins from "./Rating-Coins";
import PersonalData from "./PersonalData";
import DogData from "./DogData";
import API from '../../utils/API.js'

class MyProfile extends Component {
state = {
    user: ""
}
    componentDidMount() {
        this.loadUser();
      }
    
    loadUser = () => {
        API.getUserData().then((result) =>{
            this.setState({user: result.data}) 
            console.log(this.state.user); 
        })
           
      };
    
    createUserData (){
        console.log("cliiick")
    }
    createDog (){
        console.log("cliiick")
    }
    

    render(){
        return(
            <div>
                <RatingCoins />
                <PersonalData userData={this.createUserData} 
                    about={this.state.user.about}
                    address={this.state.user.address}
                    email={this.state.user.email}
                    firstname={this.state.user.firstname}
                    lastname={this.state.user.lastname}
                    phone={this.state.user.phone}
                    picture={this.state.user.picture}/>
                <DogData createDog={this.createDog}/>
            </div>
        )
    }
}

export default MyProfile;