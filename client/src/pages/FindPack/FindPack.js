import React, { Component } from 'react';
import Card from "../../components/Card";
import API from "../../utils/API.js";

class FindPack extends Component {
 state ={
    user:[],
    currentuser: ''
 };


 componentDidMount(){
     this.getAllUser();
     this.setState({
         currentuser: this.props.username
     })
 }

 getAllUser = () => {
     API.getAllUser()
     .then(res => {
     //filter out yourself from res.data
     const filt = res.data.filter(x => x.username !== this.state.currentuser);
    this.setState({
        user: filt
    })
}
    
).catch(error => console.log(error));
 };

 

    render() {
        return (
            <div>
                <h1> Find Pack Members</h1>
                {this.state.user.map(user =>(
                    <Card 
                    cardtype = {"findpack"}
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

