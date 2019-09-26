import React, { Component }from 'react';
import M from "materialize-css";


class AnswerCard extends Component {
    componentDidMount() {
        const options = {
          onOpenStart: () => {
            console.log("Open Start");
          },
          onOpenEnd: () => {
            console.log("Open End");
          },
          onCloseStart: () => {
            console.log("Close Start");
          },
          onCloseEnd: () => {
            console.log("Close End");
          },
          inDuration: 250,
          outDuration: 250,
          opacity: 0.5,
          dismissible: false,
          startingTop: "4%",
          endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);
      }
    render(){
        return (
            <div>
                <button className="waves-effect waves-light btn modal-trigger" data-target="modal1" key={this.props.id} onClick={(e) => this.props.handleAnswer(e, this.props)}>
                    {this.props.answer.answer_body}
                </button>
                <div ref={Modal => {this.Modal = Modal;}} id="modal1" className="modal">
                  <div className="modal-content">
                    <h4>Oops, that's incorrect</h4>
                    <p>Give it another shot!</p>
                        <div class="modal-footer">
                            <button class="modal-close waves-effect waves-green btn-flat">Close</button>
                        </div>
                  </div>
                </div>
            </div>
        );
    }
    
};
  
  export default AnswerCard;
