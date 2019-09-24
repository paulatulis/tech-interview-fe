import React, { Component } from 'react';
import QuestionCard from '../components/QuestionCard';
import IncorrectAnswer from '../components/IncorrectAnswer';



class Quiz extends Component{
    state = {
        clicked: false,
        score: 0,
        num1: 0, 
        num2: 1, 
        modal: false
    }

    handleAnswer = (e, props)=> {
        e.preventDefault()
        if(props.answer.correct){
            this.setState({
                score: this.state.score += 1,
                num1: this.state.num1 += 1,
                num2: this.state.num2 += 1, 
                modal: false
            })
        }
        else { 
            this.setState({
                modal: true
            })
        }
        this.props.submitAnswer(this.state.score)
    }


    render(){
        console.log(this.state.modal)
        const subjectId = parseInt(this.props.quizSubjectId)
        const quizQuestionsArr = this.props.questions.filter(question => parseInt(question.quiz.id) === this.props.currentQuiz.id)

        return(
            <div>
                {this.props.currentQuiz.title}
                {this.state.clicked ? 
                <div>
                    {quizQuestionsArr.slice(this.state.num1, (this.state.num2)).map(question => <QuestionCard key={question.id} question={question} answers={this.props.answers} handleAnswer={this.handleAnswer}/>)}
                    {this.state.modal? <IncorrectAnswer />: null}
            </div>
                :
                <div>
                    <button onClick={()=> this.setState({clicked: true})} name="nextQ" className="waves-effect waves-light btn-small">Start</button>
                </div>
                }
            </div>
        );
    };
};

export default Quiz