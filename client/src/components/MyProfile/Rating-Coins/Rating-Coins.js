import React from 'react';


const RatingCoins = () => {

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
                            MyRating
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
                        <span className="black-text">
                            Dog Coins
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RatingCoins;
