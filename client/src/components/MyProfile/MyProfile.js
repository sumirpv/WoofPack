import React from 'react';
import RatingCoins from "./Rating-Coins";
import PersonalData from "./PersonalData";
import DogData from "./DogData";

const MyProfile = () => {
    return(
        <div>
            <RatingCoins />
            <PersonalData />
            <DogData />
        </div>
    )

}

export default MyProfile;