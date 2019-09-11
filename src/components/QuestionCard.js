import React from 'react';


function QuestionCard(props){
    // console.log(props.question.question_body)
    
    return (
    <div className="card" key={props.id} onClick={(e) => props.handleAnswer(e, props)}>
          <div className="">
            <div className="">
              {props.question.question_body}
            </div>
          </div>
      </div>
    );
  
  };
  
  export default QuestionCard;