import React from 'react';
import "./Rating-coins.css";
var Rating = require('react-rating');


const RatingCoins = (props) => {

    const rating = props.rating || ["0"];
    let sum = 0;
     rating.map( rate => {
         sum += parseInt(rate);
    });

    const avg = sum / rating.length; 

    return (
    <div className="row">
    
        <div className="col s6">
            <div className="profile-card rating-coins card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    <div className="col s2">
                        <i class="material-icons profile-text">stars</i>
                    </div>
                    <div className="col s10">
                        <span className="black-text">
                            <span id="ratings" className="profile-text"> MyRating  </span> 
                            <Rating  
                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                                stop = {5}
                                fractions={2} 
                                readonly 
                                initialRating={avg } 
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col s6">
            <div className="profile-card rating-coins card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    <div className="col s2">
                        <i class="material-icons" >monetization_on</i>
                    </div>
                    <div className="col s10">
                        <span className="black-text" className="profile-text" >
                           <span id="dogCoins" className="profile-text"> {props.dogCoin} </span>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RatingCoins;
