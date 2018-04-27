import React, { Component } from 'react';
import Card from "../../components/Card";
import API from "../../utils/API.js";

class MyPack extends Component {
    constructor() {
        super()
    }
    //API get route from db to grab pack members, add to state and then map over them 
    state = {
        myPack: []
    }

    componentDidMount () {
        console.log('MyPack component mounted');
        this.getPack();

    }

    getPack = () => {
        var usernameObj = {username: this.props.username};
        API.getPack(usernameObj).then(res => {
            console.log(res.data[0].myPack);
            this.setState({
                myPack: res.data[0].myPack
            })
        }).catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h1> {this.props.username}'s WoofPack </h1>
                <Card />
            </div>
        );
    }
}

export default MyPack;