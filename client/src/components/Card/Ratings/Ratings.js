import React from 'react';
import "./Ratings.css";
import API from "../../../utils/API.js";

var Rating = require('react-rating');

const Ratings = (props) =>{




    // getRating =() =>{
    //     //console.log("value of the rating is ", rate);
    //     API.getRating().then(res => {
    //         console.log("ratingsssss", res.data);
    //     })

    // }

    return (

        <div><b>Rating: <Rating  stop ={5} step={1}  fractions={2} onChange ={(rate) =>this.getRating}/></b></div>

)
}

export default Ratings;