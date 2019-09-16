import React, { Component } from 'react';
import QuestionCard from '../components/QuestionCard';


class Quiz extends Component{
    state= {
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
        console.log(this.props)
        const subjectId = parseInt(this.props.subject.id)
        // const quizQuestionsArr = this.props.questions.filter(question => question.quiz_id === currentQuiz[0].id)
        let num = 0
        
        return(
            <div>
                {this.props.currentQuiz.title}
                {/* {quizQuestionsArr.slice(num, (num+=1)).map(question => <QuestionCard key={question.id} question={question} answers={this.props.answers}/>)}
                
                {!this.state.submitted ? <button name="submit" className="waves-effect waves-light btn-small" onClick={this.submitAnswer}>Check Answer</button> : 
                <button name="nextQ" className="waves-effect waves-light btn-small">Next Question</button>} */}
            </div>
        )
    }
}

export default Quiz