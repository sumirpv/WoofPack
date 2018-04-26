import React, { Component } from 'react';
import Card from "../../components/Card";
import API from "../../utils/API.js";

class FindPack extends Component {
 state ={
    user:[]
 };
 componentDidMount(){
     this.getAllUser();
 }

 getAllUser = () => {
     API.getAllUser()
     .then(res =>
    this.setState({
        user:res.data
    })
).catch(error => console.log(error));
 };

    render() {
        return (
            <div>
                <h1> Find Pack Members</h1>
                {this.state.user.map(user =>(
                    <Card 
                    key = {user._id}
                    _id = {user._id}
                    username = {user.username}
                    firstname = {user.firstname}
                    lastname = {user.lastname}
                    email = {user.email}
                    phone = {user.phone}
                    address = {user.address}
                    about = {user.about}
                    picture = {user.picture}
                    rating = {user.rating}
                    token = {user.token}
                    dogCoin = {user.dogCoin}
                    dog = {user.dog}
                   // dogName ={user.dog.dogName}
                    />
                ))}
                
            </div>
        );
    }
}

export default FindPack;

