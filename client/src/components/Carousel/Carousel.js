import React, { Component } from "react";
import $ from 'jquery';
import "./Carousel.css";

class Carousel extends Component {

componentDidMount () {
    var carousel = document.getElementsByClassName(".carousel .carousel-item")
    carousel[0].style.visibility = "visible"
}

    render() {

 
        return (
            <div>
                <h1> Carousel </h1>
                                {/* <div className="carousel">
                    <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
                    <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
                    <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
                    <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
                    <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
                </div> */}
            </div>
        )
    }

}


export default Carousel;