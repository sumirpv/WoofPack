import React from "react";
import io from 'socket.io-client';

class ChatModal extends React.Component{
    state = {
        draftChat: ""
    }


    render(){
        return (
            <div class="modal" tabIndex="-1" role="dialog">
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
                                                <input value={this.state.draftChat} name={"draftChat"} onChange={this.handleInputChange} placeholder="Enter chat here" id="draftChat" type="text" className="validate">
                                                </input>
                                            </div>
          
         
  
    
     
                                        </div>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.props.closeModal}>Close</button>
                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default ChatModal;