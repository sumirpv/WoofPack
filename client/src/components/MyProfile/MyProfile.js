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
            console.log("this is the res.data " + result); 
            this.setState({user: result})
             
        })
           
         console.log("this is state" + this.state.user);
           
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
                <PersonalData userData={this.createUserData}/>
                <DogData createDog={this.createDog}/>
            </div>
        )
    }
}

export default MyProfile;