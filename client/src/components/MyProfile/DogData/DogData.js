import React, { Component } from "react";


class DogData extends Component {
    constructor(props){
        super(props); 
    }
    state = {
        dogName:"",
        breed: "",
        age: "",
        temperament: "",
        size: "",
        file: "",
        aboutDog: "",

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };


    handleClick =() => {
        this.props.createDog(); 
     }
    render() {
        return (
            <div className="row">
            <div className="col s12">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input name="dogName" value={this.state.dogName} onChange={this.handleInputChange} id="dogName" type="text" className="validate" />
                                    <label for="dogName">Dog Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input name="breed" value={this.state.breed} onChange={this.handleInputChange}id="breed" type="text" className="validate" />
                                    <label for="breed">Breed</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input name="age"value={this.state.age} onChange={this.handleInputChange} id="age" type="text" className="validate" />
                                    <label for="age">Age</label>
                                </div>
                                <div className="input-field col s6">
                                    <input name="temperament" value={this.state.temperament} onChange={this.handleInputChange} id="temperament" type="text" className="validate" />
                                    <label for="temperament">Temperament</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input name="size" value={this.state.size} onChange={this.handleInputChange} id="size" type="text" className="validate" />
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
                                    <textarea name="aboutDog" value={this.state.aboutDog} onChange={this.handleInputChange} id="aboutDog" className="materialize-textarea"></textarea>
                                    <label for="aboutDog">About My Dog</label>
                                </div>
                            </div>
                            <a onClick={this.handleClick}class="waves-effect waves-light btn">Save</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default DogData;


