import React from "react";
import "./DogData.css";


const DogData = (props) => {

    return (
        <div className="profile-card card-panel grey lighten-5 z-depth-1">
            <div className="row">
            <h3 className="profile-header"> About Your Doggo </h3>
                    <div className="col s2">
                        <img src={props.picture} alt="" class="circle responsive-img" />
                    </div>
                    <div className="col s5">
                        <div> <span> <h5>{props.name} </h5></span> </div>
                        <span className="black-text">
                            <strong> Breed:   </strong>{props.breed}</span><br/>
                        <span className="black-text">            
                            <strong> Size:   </strong> {props.size} </span><br/>      
                        <span className="black-text">        
                            <strong> Age:   </strong> {props.age}  </span><br/>          
                    </div>        
                                
                    <div className="col s5">
                    <span className="black-text">           
                            <strong> Temperment:   </strong> {props.temperment}</span><br/>
                    <span id="aboutDog" className="black-text">
                        <strong> About Me:   </strong>{props.about} efjhbwehcbehrbcveh veh cehrbc erhcv rhveverv evueuv ueerv </span>
                    </div>            
                           
            </div>
        </div>

    )
}


export default DogData;


