import React, { Component } from "react";
import RatingCoins from "./Rating-Coins";
import PersonalData from "./PersonalData";
import DogData from "./DogData";

class MyProfile extends Component {

    /*componentDidMount() {
        this.loadUser();
      }*/
    
    /*loadUser = () => {
        API.loadUser({findbyId}).then(res =>
           console.log(res.data)
          ).catch(err => console.log(err));
      };*/
    
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
                <PersonalData userData={this.createUserData}/>
                <DogData createDog={this.createDog}/>
            </div>
        )
    }
}

export default MyProfile;