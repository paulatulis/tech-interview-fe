import React, { Component } from 'react';
import M from "materialize-css";


class PersonalHome extends Component{
    componentDidMount() {
        M.AutoInit();
    }
    
    render(){
        console.log(this.props.quizSubjects)

        return(
            <div>
                Welcome, {this.props.user.username}!
                We want to help you prepare for upcoming interviews, so we've created a few exercises to quiz you on your knowledge of technical concepts and trivia. Take the quiz as many times as you'd like. Your scores will be recorded so you can see how you improve over time. Best of luck! 
                <div>
                    <button className='dropdown-trigger btn' href='#' data-target='dropdown1'>Choose a Subject</button>
                    
                    <ul id='dropdown1' className='dropdown-content' onClick={(e) => this.props.setQuizSubject(e)}>
                    
                    {this.props.quizSubjects.map(quiz => 
                    <li><a href="#!" id={quiz.subject_id}>{quiz.title}</a></li>
                    )}
                    </ul>

                </div>
            </div>

        )
    }
}

export default PersonalHome