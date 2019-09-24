import React from 'react';


function AnswerCard(props){
    return (
        <div>
            <button className="btn-large waves-effect waves-light blue" key={props.id} onClick={(e) => props.handleAnswer(e, props)}>{props.answer.answer_body}</button>
        </div>
    );
};
  
  export default AnswerCard;
