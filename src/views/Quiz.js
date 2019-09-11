import React, { Component } from 'react';
import QuestionCard from '../components/QuestionCard'

class Quiz extends Component{
    render(){
       
        
        const quizTitle = this.props.quiz.map(quiz => quiz.title).filter(title => title === 'React quiz 1')
        const quizQuestionsArr = this.props.questions.filter(quiz => quiz.quiz_id === 5)
        
        return(
            <div>
                {quizTitle}
                {quizQuestionsArr.map(question => <QuestionCard key={question.id} question={question}/>)}
            </div>
        )
    }
}

export default Quiz

// let quizType;
  
//     switch (quiz.subject_id) {
//       case "4":
//         quizType = <i className="ruby" />;
//         break;
//       case "6":
//         quizType = <i className="react" />;
//         break;
//       case "5":
//         quizType = <i className="javascript" />;
//         break;
//       default:
//         botType = <div />;
//     }