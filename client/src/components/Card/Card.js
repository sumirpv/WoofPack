import React from "react";
import "./Card.css";

const Card = props => (
    <div 
        // The below info was borrowed from another App until we know all the info that we are putting into the card.
        role="img"
        aria-label="click item"
        onClick={() => props.handleClick(props.id)}
        style={{ backgroundImage: `url("${props.image}")` }}
        className={`click-item${props.shake ? " shake" : ""}`}
    />
);

export default Card;