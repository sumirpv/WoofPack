import React from "react";
import "./DogData.css";


const DogData = (props) => {

    return (
        <div className="profile-card card-panel grey lighten-5 z-depth-1 dog-text">
        <h3 className="profile-header"> {props.name} </h3>
            <div className="row">
            
                    <div className="col s4">
                        <img src={props.picture} alt="" class="circle responsive-img dog-img" />
                    </div>
                    <div className="col s4">
                        
                        <span className=" profile-text">
                            {props.breed}</span> <br/><br/>
                        <span className=" profile-text">            
                            {props.size} </span><br/>  <br/>    
                        <span className=" profile-text">        
                            {props.age} years old </span><br/>          
                    </div>        
                                
                    <div className="col s4">
                    <span className=" profile-text">           
                    <strong> Temperment:   </strong> {props.temperment}</span><br/><br/>
                    <span id="aboutDog" className=" profile-text">
                        <strong> About Me:   </strong>{props.about} efjhbwehcbehrbcveh veh cehrbc erhcv rhveverv evueuv ueerv </span>
                    </div>            
                           
            </div>
        </div>

    )
}


export default DogData;


