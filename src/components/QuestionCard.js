import React from 'react';
import AnswerCard from './AnswerCard';
import './QuestionCard.css';



function QuestionCard(props){
    // console.log(props.quiz_question_id)
    const questionAnswers = props.answers.filter(answer => answer.quiz_question_id === props.question.id)

    return (
      <div className="" key={props.id}>
            <div className="card">
              <div className="">
                {props.question.question_body}
              </div>
            </div>
            {questionAnswers.map(answer => <AnswerCard key={answer.id} answer={answer} handleAnswer={props.handleAnswer}/>)}
        </div>
      );
  
    };
  
  export default QuestionCard;