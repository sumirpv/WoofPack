import React, { Component } from "react";
import "./Ratings.css";
import API from "../../../utils/API.js";

var Rating = require('react-rating');

class Ratings extends Component {

    constructor(props){
        super(props); 
    }
    state ={
        rating :this.props.rating,
        reciver: this.props.id
    }


    getRating =(rate) =>{
    console.log("value of the rating is ", rate);
        API.getRating(this.state).then(res => {
            console.log("ratingsssss", res.data.data);
            if (res.data === true){
                alert("You set " + this.state.rating + " rating")
             }
         })
         console.log("after the rating api ",this.state.rating); 
         console.log("after the rating  receiver api ",this.state.reciver)

    }
    render(){
    return (

        <div><b>Rating: <Rating  name ="rating" stop ={5} step={1}  fractions={2} onChange ={(rate) =>this.getRating(rate)}/></b></div>

)
}
}

export default Ratings;