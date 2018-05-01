import React, { Component } from "react";
import "./AddDogModal.css";
import API from "../../utils/API.js";

function Redirect(where) {
    window.location = where;
}

class AddDogModal extends Component {
    constructor() {
        super()
    };

    state = {
        dogName: "",
        breed: "",
        age: "",
        selected: "",
        temperment: "",
        size: "",
        // aboutDog : "",
        avatar: ""
    };

    handleInputChange = (event) => {
        switch (event.target.name) {
            case "avatar":
                this.setState({
                    avatar: event.target.files[0]
                });
                console.log(event.target.files[0]);
                break;
            default:
                const { name, value } = event.target;
                this.setState({
                    [name]: value
                });
        };
    };

    onSubmit = (event) => {

        event.preventDefault();
        const { dogName, breed, age, temperment, size, aboutDog, avatar } = this.state;
        let formData = new FormData();
        formData.append("dogName", dogName);
        formData.append("breed", breed);
        formData.append("age", age);
        formData.append("temperment", temperment);
        formData.append("size", size);
        formData.append("aboutDog", aboutDog);
        formData.append("avatar", avatar);
        var token = "t" + Math.random();
        formData.append("token", token);

        API.createDog(formData).then((result) => {
            Redirect("/profile");
        });
    };

    render() {

        return (
            <div class="modal" tabIndex="-1" role="dialog" id="dog-modal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{this.props.header}</h5>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <form className="col s12" onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <div className="form-group">
                                                <input value={this.state.dogName} name={"dogName"} onChange={this.handleInputChange} placeholder="Dog's Name" id="dog-name" type="text" className="validate">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.breed} name={"breed"} onChange={this.handleInputChange} placeholder="Dog Breed" id="breed" type="text" className="validate">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.age} name={"age"} onChange={this.handleInputChange} placeholder="Dog Age" id="age" type="text" className="validate">
                                                </input>
                                            </div>
                                        </div>
                                        <div className="input-field col s6">
                                            <div className="form-group">
                                                <input value={this.state.temperment} name={"temperment"} onChange={this.handleInputChange} placeholder="Temperment" id="temperment" type="text" className="validate">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.aboutDog} name={"aboutDog"} onChange={this.handleInputChange} placeholder="More about your Dog" id="about-dog" type="text" className="validate">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.size} name={"size"} onChange={this.handleInputChange} placeholder="Size of your Dog" id="dog-size" type="text" className="validate">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.image} name={"avatar"} onChange={this.handleInputChange} id="avatar" type="file">
                                                </input>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="submit" id="addDog2" class="btn btn-secondary" data-dismiss="modal">Submit</button>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.props.closeModal}>Close</button>
                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    };

};

export default AddDogModal;
