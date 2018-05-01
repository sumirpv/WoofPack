import React, { Component } from "react";
import "./Ratings.css";
import API from "../../../utils/API.js";
var Rating = require('react-rating');
// var FontAwesome = require('react-fontawesome');

class Ratings extends Component {

    constructor(props){
        super(props); 
    }
    state = {
        rating : "",
        receiver : this.props.id
    }

    updateRating = (rate) => {
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
        console.log("rating",this.props);
        const rating = this.props.userRating || ["0"];
        let sum = 0;
        let num = 3;
         rating.map( rate => {
             sum += parseInt(rate);
        });
    
        const avg = sum / rating.length; 

        return (

            <div><b>
                <Rating 
                    id ="rating" 
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    stop ={5} 
                    fractions={2} 
                    initialRating={avg} 
                    onChange = {(rate) => 
                    this.updateRating(rate)}
                />
            </b></div>

        )
    }
}

export default Ratings;