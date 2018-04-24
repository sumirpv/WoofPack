import React from 'react';


const DogData = () => {

    return (
        <div className="row">
        <div className="col s12">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="dog_name" type="text" className="validate" />
                                <label for="dog_name">Dog Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="breed" type="text" className="validate" />
                                <label for="breed">Breed</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="age" type="text" className="validate" />
                                <label for="age">Age</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="temperament" type="text" className="validate" />
                                <label for="temperament">Temperament</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="size" type="text" className="validate" />
                                <label for="size">Size</label>
                            </div>
                            <div className="input-field col s6">
                                <div class="file-field input-field">
                                    <div class="btn">
                                        <span>File</span>
                                        <input type="file" />
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="about_Me" className="materialize-textarea"></textarea>
                                <label for="about_dog">About My Dog</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DogData;


