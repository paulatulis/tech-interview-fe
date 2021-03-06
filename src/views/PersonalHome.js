import React, { Component } from 'react';
import M from "materialize-css";
import './PersonalHome.css';


class PersonalHome extends Component{
    componentDidMount() {
        M.AutoInit();
    }
    
    render(){
        return(
            <div className="body-body-1">
                <div className="container-1">
                    <div className="row">
                        <div className="col s6">
                            <h1>Welcome, {this.props.user.username}!</h1>
                        <div>
                            <p>We want to help you prepare for upcoming interviews, so we've created a few exercises to quiz you on your knowledge of technical concepts and trivia. Take the quiz as many times as you'd like. Your scores will be recorded so you can see how you improve over time. Best of luck!</p> 
                        </div>
                        <div>
                            <button className='dropdown-trigger btn' href='#' data-target='dropdown1'>Choose a Subject</button>
                            <ul id='dropdown1' className='dropdown-content' onClick={(e) => this.props.setQuizSubject(e)}>
                            {this.props.subjects.map(subject => <li><a href="#!" key={subject.id} name={subject.name} id={subject.id} >{subject.name}</a></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         </div>

        );
    };
};

export default PersonalHome;