import React from "react";
import { Input, Row } from "react-materialize"
import $ from "jquery"


const SendCoin = () => {
    return (
        <Row>
            <div className="col s8">
            <Input s="12" type='select' label="Materialize Select" defaultValue='2'>
                <optgroup label="Walk">
                    <option value="5">Short walk 5 Coins</option>
                    <option value="10">Long walk 10 Coins</option>
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
            <button>Send Coin </button>
            </div>
            
        </Row>

    )
}




export default SendCoin;