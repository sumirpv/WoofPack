import React from "react";
import "./AddDogBtn.css";

const AddDogBtn = props => (
    <span className="waves-effect waves-light btn" {...props}>
        <i class="material-icons left">add_circle</i>Add Dog
    </span>
)

export default AddDogBtn;