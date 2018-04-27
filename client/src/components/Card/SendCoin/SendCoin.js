import React, { Component } from "react";
import { Input, Row } from "react-materialize"
import $ from "jquery"


class SendCoin extends Component {
    constructor(props){
        super(props); 
    }
    state ={
        coinValue: 0
    }

    handleInputChange = event => {
        console.log("it hit"); 
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    sendData = event => {
        console.log(this.state.coinValue); 
    }



    render(){
        return (
            <Row>
                <div className="col s8">
                <Input onChange={this.handleInputChange}  name="coinValue" type='select' label="Materialize Select" defaultValue='2'>
                    <optgroup label="Walk">
                        <option  value="5" >Short walk 5 Coins</option>
                        <option value="10" >Long walk 10 Coins</option>
                    </optgroup>
                    <optgroup label="Day Care">
                        <option value="15">15 Coins</option>
                    </optgroup>
                    <optgroup label="Overnight Care">
                        <option value="20">1-2 Days 20 Coins</option>
                        <option value="40">2-3 Days 40 Coins</option>
                        <option value="100">Full Week 100 Coins</option>
                    </optgroup>
                </Input>
                </div>
                <div className="col s4">
                <button onClick={this.sendData}>Send Coin </button>
                </div>
                
            </Row>

        )
    }
}




export default SendCoin;