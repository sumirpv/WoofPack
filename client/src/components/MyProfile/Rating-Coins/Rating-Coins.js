import React from 'react';
import "./Rating-coins.css";
var Rating = require('react-rating');


const RatingCoins = (props) => {
    console.log("props", props)

    return (
    <div className="row">
        <div className="col s6">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    <div className="col s2">
                        <i class="material-icons">stars</i>
                    </div>
                    <div className="col s10">
                        <span className="black-text">
                            <span id="ratings">MyRating  </span> 
                            <Rating  
                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                                stop = {5}
                                fractions={2} 
                                readonly 
                                initialRating={props.rating} 
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col s6">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    <div className="col s2">
                        <i class="material-icons">monetization_on</i>
                    </div>
                    <div className="col s10">
                        <span className="black-text" >
                           <span id="dogCoins"> Dog Coins </span>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RatingCoins;
