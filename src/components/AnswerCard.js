import React from 'react';


function AnswerCard(props){
    return (
        <div className="card" key={props.id} onClick={(e) => props.handleAnswer(e, props)}>
            <div className="">
                <div className="">{props.answer.answer_body}</div>
            </div>
        </div>
    );
};
  
  export default AnswerCard;
