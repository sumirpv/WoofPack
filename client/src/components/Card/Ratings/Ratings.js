import React, { Component } from "react";
import "./Ratings.css";
import API from "../../../utils/API.js";
var Rating = require('react-rating');
var FontAwesome = require('react-fontawesome');

class Ratings extends Component {

    constructor(props){
        super(props); 
    }
    state = {
        rating : "",
        receiver : this.props.id
    }

    updateRating = (rate) => {
        console.log("value of the rating is ", rate);
        API.newRating({
            id : this.state.receiver,
            rating : rate
        }).then(res => {
            this.setState({
                rating : rate,
            })
            if (res.data === true) {
                alert("You set " + this.state.rating + " rating")
            }
        });
    };

    render(){
        return (

            <div><b>Rating:
                <Rating 
                    id ="rating" 
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    stop ={5} 
                    fractions={2} 
                    initialRating={this.state.rating} 
                    onChange = {(rate) => 
                    this.updateRating(rate)}
                />
            </b></div>

        )
    }
}

export default Ratings;