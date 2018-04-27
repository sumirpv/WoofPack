import React, { Component } from 'react';
import Card from "../../components/Card";
import API from "../../utils/API.js";

class MyPack extends Component {
    constructor() {
        super()

        this.state = {
            myPack: [],
            myPackInfo: []
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
            console.log(res);
            this.setState({
                myPackInfo: [...this.state.myPackInfo, res.data]
            });
            
        }).catch(error => console.log(error));
    };

    // getPackInfo = () => {
    //     // console.log('getbackinfo function has been fired');
    //     console.log(this.state.myPack)
    //     for (let i = 0; i < this.state.myPack.length; i++) {
    //         var usernameObj = {username: this.state.myPack[i]};
    //         console.log(usernameObj);
    //         API.getPackInfo(usernameObj).then(response => {
    //             console.log(response);
    //             this.setState({
    //                 myPackInfo: [...this.state.myPackInfo, response.data]
    //             })
    //         });
    //     };
    // };

    render() {
        console.log('state');
    console.log(this.state.myPackInfo);
        return (
            <div>
                <h1> {this.props.username}'s WoofPack </h1>
                {console.log(this.state.myPackInfo)}
                {this.state.myPackInfo.map(member => {
                    return (
                     <Card 
                     address = {member[0].address}
                     dog = {member[0].dog}
                     firstname = {member[0].firstname}
                     lastname = {member[0].lastname}
                     phone = {member[0].phone}
                     email = {member[0].email}
                     picture = {member[0].picture}
                     about = {member[0].about}
                     address = {member[0].address}
                     username = {member[0].user}
                     _id = {member[0]._id}
                     message = {member[0].message}
                     />
                    )
                    
                })}
               
            </div>
        );
    }
}

export default MyPack;