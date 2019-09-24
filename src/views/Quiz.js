import React, { Component } from 'react';
import QuestionCard from '../components/QuestionCard';


class Quiz extends Component{
    state= {
        clicked: false,
        submitted: false
    }
    componentDidMount(){
       //make sure quiz subject is still there
    }

    submitAnswer(e){
        e.preventDefault()
        console.log(e.target.name)
        this.setState({submitted: true})
    }
    render(){
        console.log(this.props.questions.filter(question => parseInt(question.quiz.id) === this.props.currentQuiz.id))
        console.log(this.props.questions.filter(question => parseInt(question.quiz_id) === parseInt(this.props.currentQuiz.id)))

        const subjectId = parseInt(this.props.quizSubjectId)
        const quizQuestionsArr = this.props.questions.filter(question => parseInt(question.quiz.id) === this.props.currentQuiz.id)
        let num = 0
        
        return(
            <div>
                {this.props.currentQuiz.title}
                {this.state.clicked ? 
                <div>
                    {quizQuestionsArr.slice(num, (num+=1)).map(question => <QuestionCard key={question.id} question={question} answers={this.props.answers}/>)}
            </div>
                
                :
                <div>
                    <button onClick={()=> this.setState({clicked: true})} name="nextQ" className="waves-effect waves-light btn-small">Start</button>
                </div>
                }
                

                
                
                {/* {!this.state.submitted ? <button name="submit" className="waves-effect waves-light btn-small" onClick={this.submitAnswer}>Check Answer</button> : 
                <button name="nextQ" className="waves-effect waves-light btn-small">Next Question</button>} */}
            </div>
        )
    }
}

export default Quiz