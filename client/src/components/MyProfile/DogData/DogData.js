import React, { Component } from "react";


const DogData = (props) => {

    return (
        <div className="row">
            <div className="col s12">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                        <div className="col s2">
                            <img src={props.picture} alt="" class="circle responsive-img" />
                            <div> <span> {props.name} </span> </div>
                        </div>
                        <div className="col s5">
                            <span className="black-text">
                                <strong> Breed:   </strong>
                                {props.breed}
                            </span><br/>
                            <span className="black-text">
                                <strong> Size:   </strong>
                                {props.size}
                            </span><br/>

                        </div>
                        <div className="col s5">
                            <span className="black-text">
                                <strong> Age:   </strong>
                                {props.age}
                            </span><br/>
                            <span className="black-text">
                                <strong> Temperment:   </strong>
                                {props.temperment}
                            </span><br/>
                        </div>
                    </div>
                    <div className="row valign-wrapper">
                    <div className="col s2">
                    </div>
                    <div className="col s10">
                    <span className="black-text">
                                <strong> About Me:   </strong>
                                {props.about}
                            </span><br/>
                    </div>

                    </div>
                </div>
            </div>
        </div>

    )
}


export default DogData;


