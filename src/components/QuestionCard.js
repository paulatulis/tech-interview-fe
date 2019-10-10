import React from 'react';
import AnswerCard from './AnswerCard';
import './QuestionCard.css';



function QuestionCard(props){
    const questionAnswers = props.answers.filter(answer => answer.quiz_question_id === props.question.id)

    return (
      <div >
            <div key={props.id}>
              <div>
                {props.question.question_body}
              </div>
            </div>
            {questionAnswers.map(answer => <div className="centered"><AnswerCard key={answer.id} answer={answer} handleNext={props.handleNext}/></div>)}
        </div>
      );
  
    };
  
  export default QuestionCard;