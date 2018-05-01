import React from "react";
import "./DogData.css";


const DogData = (props) => {

    return (
        <div className="profile-card card-panel grey lighten-5 z-depth-1 dog-text">
            <div className="row">
                <div className="col l4 m12 s12">
                    <img src={props.picture} alt="" class="responsive-img" id="dogDataImg"/>
                </div>
                <div className="col l8 m12 s12">
                    <div className="row">
                        <div className="col l12">
                            <h3 className="profile-header"> {props.name} </h3>
                        </div>
                        <div className="row">
                            <div className="col l2 m12 s12">
                            </div>
                            <div className="col l4 m12 s12" id="dog-info-left">
                                <span className=" profile-text">
                                Breed: {props.breed}</span> <br/><br/>
                                <span className=" profile-text">            
                                Size: {props.size} </span><br/><br/>    
                                <span className=" profile-text">        
                                Age: {props.age} years old </span><br/>
                            </div>
                            <div className="col l4 m12 s12" id="dog-info-left">
                                <span className=" profile-text">           
                                <strong> Temperment: </strong> {props.temperment}</span><br/><br/>
                                <span id="aboutDog" className=" profile-text">
                                <strong> About Me: </strong>{props.about}</span>
                            </div>
                            <div className="col l2 m12 s12">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            
            
            
            
            
            
            
            
        //     <div className="row">
        //         <h3 className="profile-header"> {props.name} </h3>
        //             <div className="col s4">
        //                 <img src={props.picture} alt="" class="circle responsive-img dog-img" />
        //             </div>
        //             <div className="col s4">
                        
        //                 <span className=" profile-text">
        //                 Breed: {props.breed}</span> <br/><br/>
        //                 <span className=" profile-text">            
        //                 Size: {props.size} </span><br/><br/>    
        //                 <span className=" profile-text">        
        //                 Age: {props.age} years old </span><br/>          
        //             </div>        
                                
        //             <div className="col s4">
        //             <span className=" profile-text">           
        //             <strong> Temperment:   </strong> {props.temperment}</span><br/><br/>
        //             <span id="aboutDog" className=" profile-text">
        //             <strong> About Me:   </strong>{props.about}</span>
        //             </div>            
                           
        //     </div>
        // </div>

    )
}


export default DogData;


