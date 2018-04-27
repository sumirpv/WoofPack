import React, { Component } from 'react';
import Card from "../../components/Card";
import API from "../../utils/API.js";

class MyPack extends Component {
    constructor() {
        super()
    }
    //API get route from db to grab pack members, add to state and then map over them 
    state = {
        myPack: [],
        myPackInfo: []
    }

    componentDidMount() {
        console.log('MyPack component mounted');
        this.getPack();

    }

    getPack = () => {
        var usernameObj = { username: this.props.username };
        API.getPack(usernameObj).then(res => {
            // console.log(res.data[0].myPack);
            this.setState({
                myPack: res.data[0].myPack
            });
            this.getPackInfo();
        }).catch(error => console.log(error));
    };

    getPackInfo = () => {
        // console.log('getbackinfo function has been fired');
        // console.log(this.state.myPack)
        for (let i = 0; i < this.state.myPack.length; i++) {
            var usernameObj = {username: this.state.myPack[i]};
            console.log(usernameObj);
            API.getPackInfo(usernameObj).then(response => {
                console.log(response);
                this.setState({
                    myPackInfo: [...this.state.myPackInfo, response]
                })
            });
        };
    };

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