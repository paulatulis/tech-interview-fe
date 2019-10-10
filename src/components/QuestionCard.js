import React from 'react';
import AnswerCard from './AnswerCard';
import './QuestionCard.css';



function QuestionCard(props){
    const questionAnswers = props.answers.filter(answer => answer.quiz_question_id === props.question.id)

    return (
      <div className="" key={props.id}>
            <div className="card">
              <div className="">
                {props.question.question_body}
              </div>
            </div>
            {questionAnswers.map(answer => <AnswerCard key={answer.id} answer={answer} handleNext={props.handleNext}/>)}
        </div>
      );
  
    };
  
  export default QuestionCard;