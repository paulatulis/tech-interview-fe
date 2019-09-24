import React, { Component } from 'react';
import QuestionCard from '../components/QuestionCard';
import M from "materialize-css";



class Quiz extends Component{
    state = {
        clicked: false,
        score: 0,
        num: 0, 
        modal: false
    }
    componentDidMount(){
        M.AutoInit();
    }

    handleAnswer = (e, props)=> {
        e.preventDefault()
        if(props.answer.correct){
            this.setState({
                score: this.state.score += 1
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

        const subjectId = parseInt(this.props.quizSubjectId)
        const quizQuestionsArr = this.props.questions.filter(question => parseInt(question.quiz.id) === this.props.currentQuiz.id)
        
        
        return(
            <div>
                {this.props.currentQuiz.title}
                {this.state.clicked ? 
                <div>
                    {quizQuestionsArr.slice(this.state.num, (this.state.num+=1)).map(question => <QuestionCard key={question.id} question={question} answers={this.props.answers} handleAnswer={this.handleAnswer}/>)}
                    {this.state.modal? 
                    <div id="modal1" class="modal modal-fixed-footer">
                        <div class="modal-content">
                            <h4>Modal Header</h4>
                            <p>A bunch of text</p>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>
  :
  <div>no modal</div>}
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