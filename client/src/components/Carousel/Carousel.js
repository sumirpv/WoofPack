import React, { Component } from "react";
import $ from 'jquery';
import "./Carousel.css";

class Carousel extends Component {

componentDidMount () {
    var carousel = document.getElementsByClassName(".carousel .carousel-item")
    console.log(carousel)
    carousel[0].style.visibility = "visible"
}

    render() {

 
console.log("carousel")
        return (
            <div>
                <h1> Carousel </h1>

            </div>
        )
    }

}


export default Carousel;