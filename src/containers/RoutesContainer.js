import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Landing from '../components/Landing';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Quiz from '../views/Quiz';
import Nav from '../components/Nav';
import PersonalHome from '../views/PersonalHome';

const baseURL = 'http://localhost:3000'
class RoutesContainer extends Component {
    state = {
        user: {},
        errors: '',
        redirect: null, 
        quizSubjectId: null,
        quizzes: [],
        subjects: [],
        questions: [],
        answers: [], 
        submitted: null,
        currentQuiz: {}
    }
    
    setQuizSubject = (e) => {
        let date = Date.now()
        let title = e.target.name + ` quiz ${date}`
        fetch(baseURL+`/quizzes`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify({
                title: title,
                description: this.state.user.username + `'s new quiz`, 
                score: 0,
                subject_id: e.target.id
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            console.log(this.state.user.id)
            this.setState({
                currentQuiz: res,
                subject: res.subject,
                redirect: <Redirect to='/quizzes' />
            })
        })
    }
    newQuizEvent(e, props){
        
        console.log(e)
        console.log(props)
        // fetch(baseURL+`/quiz_events`,{
        //     method: 'POST',
        //     headers: { 'Content-type': 'application/json', Accept: 'application/json'},
        //     body: JSON.stringify({
        //             user_id: this.state.user.id,
        //             quiz_id: this.state.currentQuiz.id,
        //             name: 'test'
        //     })
        // })
        // .then(res => res.json())
        // .then(res => {
        //     console.log(res)
        // })

    }

    handleLogin = (e) => {
        e.preventDefault()
        let form = e.target
        let userObj = {
            username: form.username.value,
            password: form.password.value
        }
        fetch(baseURL + '/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify({session: userObj})
        })
        .then(res => res.json())
        .then(res => {
            if(res.errors){
                this.setState({errors: res.errors}, ()=> console.log("here are the errors", this.state.errors))
            }
            else {
                this.setState({
                    user: res.user,
                    redirect: <Redirect to='/home' />
                })
                localStorage.setItem('token', res.token)
            }
        })
        
    }

    handleLogout =() => {
        localStorage.removeItem('token')
        this.setState({redirect: <Redirect to='/' />})

    }

    componentDidMount(){
       this.fetchQuizzes()
       this.fetchQuestions()
       this.fetchAnswers()
       this.fetchSubjects()
       if (localStorage.token) 
       this.confirmUser(localStorage.token)
    }

    confirmUser(token){
        fetch(baseURL+`/init-state`,{
            headers: { Authorization: token}
        })
        .then(res => res.json())
        .then(res =>
            this.setState({user: res})
            )
    }
    fetchQuizzes(){
        fetch(baseURL+`/quizzes`) 
        .then(res => res.json())
        .then(quizzes => this.setState({quizzes: quizzes}))
    }

    fetchQuestions(){
        fetch(baseURL+`/quiz_questions`) 
        .then(res => res.json())
        .then(questions => this.setState({questions: questions}))
    }

    fetchSubjects(){
        fetch(baseURL+`/subjects`) 
        .then(res => res.json())
        .then(subjects => this.setState({subjects: subjects}))
    }

    fetchAnswers(){
        fetch(baseURL+`/answers`) 
        .then(res => res.json())
        .then(answers => this.setState({answers: answers}))
    }


    render(){
        return(
            <div>
                {this.state.redirect}
                <Nav handleLogout={this.handleLogout}/>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/home' render={()=> (<PersonalHome user={this.state.user} subjects={this.state.subjects}setQuizSubject={this.setQuizSubject}/>)}/>
                    <Route exact path='/login' render={()=> (<Login handleLogin={this.handleLogin}/>)} />
                    <Route exact path='/profile' render={()=> (<Profile user={this.state.user}/>)} />
                    <Route exact path='/quizzes' render={()=> (<Quiz newQuizEvent={this.newQuizEvent} currentQuiz={this.state.currentQuiz} questions={this.state.questions} subject={this.state.subject} answers={this.state.answers} user={this.state.user}/>)} />

                </Switch>
            </div>
        )
    }
}

export default RoutesContainer