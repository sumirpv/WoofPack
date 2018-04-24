import React, { Component } from "react";


const PersonalData = () => {

    return (
        <div className="row">
        <div className="col s12">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    <form class="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                <label for="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Phone" type="text" className="validate" />
                                <label for="Phone_number">Phone number</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Address" type="text" className="validate" />
                                <label for="Address">Address</label>
                            </div>
                        </div>

                        <div className="row">
                            <div class="input-field col s12">
                                <textarea id="about_me" className="materialize-textarea"></textarea>
                                <label for="about_me">About Me</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PersonalData;
