import React, { Component } from 'react';
import Card from "../../components/Card";
import API from "../../utils/API.js";

class MyPack extends Component {
    constructor() {
        super()

        this.state = {
            myPack: [],
            myPackInfo: [],
            packArray: []
        }
    }
    //API get route from db to grab pack members, add to state and then map over them 

    componentDidMount() {
        console.log('MyPack component mounted');
        this.getPack();

    }

    getPack = () => {
        var usernameObj = { username: this.props.username };
        //Get the IDs and all data of those are in myPack property in the DB for this user
        API.getPack(usernameObj).then(res => {
            console.log(res.data);
            this.setState({
                myPackInfo: res.data,
                packArray: res.data[0].myPack
            });
            
        }).catch(error => console.log(error));
    };

    render() {
        return (
            <div>
                <h1> {this.props.username}'s WoofPack </h1>
                {console.log(this.state.myPackInfo)}
                {this.state.packArray.map(member => {
                    return (
                        <Card 
                        cardtype = {"mypack"}
                        address = {member.address}
                        dog = {member.dog}
                        firstname = {member.firstname}
                        lastname = {member.lastname}
                        phone = {member.phone}
                        email = {member.email}
                        picture = {member.picture}
                        about = {member.about}
                        address = {member.address}
                        username = {member.username}
                        _id = {member._id}
                        message = {member.message}
                        rating = {member.rating}
                        />
                       )
                    

                    
                })}
               
            </div>
        );
    }
}

export default MyPack;