import React, { Component } from 'react';
import QuestionCard from '../components/QuestionCard';



class Quiz extends Component{
    state = {
        clicked: false,
        score: 0,
        correct: 0,
        incorrect: 0,
        num1: 0, 
        num2: 1, 
        modal: true
    }

    handleNext = (e, correct)=> {
        e.preventDefault()
        console.log(correct)
        if(correct){
            this.setState({
                score: this.state.score += 1,
                correct: this.state.correct += 1,
                num1: this.state.num1 += 1,
                num2: this.state.num2 += 1, 
                modal: true
            })
        }
        else { 
            this.setState({
                score: this.state.score -= 1,
                incorrect: this.state.incorrect += 1,
                modal: true
            })
        }
        this.props.submitAnswer(this.state.score)
        
    }


    render(){
        const quizQuestionsArr = this.props.questions.filter(question => parseInt(question.quiz.id) === this.props.currentQuiz.id)
        return(
            <div>
                {this.props.currentQuiz.title}
                {/* {this.state.clicked ? 
                <div>
                    {quizQuestionsArr.slice(this.state.num1, (this.state.num2)).map(question => <QuestionCard key={question.id} question={question} answers={this.props.answers} handleAnswer={this.handleAnswer}/>)}
                </div>
                :
                <div>
                    <button onClick={()=> this.setState({clicked: true})} name="nextQ" className="waves-effect waves-light btn-small">Start</button>
                </div>
                } */}
                {this.state.num2 !== quizQuestionsArr.length? 
                <div>
                {quizQuestionsArr.slice(this.state.num1, (this.state.num2)).map(question => <QuestionCard key={question.id} question={question} answers={this.props.answers} handleNext={this.handleNext}/>)}
            </div>
                :
                <div>
                You answered x/x questions right on the first attempt. Good work!
            </div>
                }
            </div>
        );
    };
};

export default Quiz;