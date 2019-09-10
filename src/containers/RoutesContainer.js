import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Landing from '../components/Landing';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Nav from '../components/Nav';
import PersonalHome from '../views/PersonalHome';

const baseURL = 'http://localhost:3000'
class RoutesContainer extends Component {
    state = {
        user: {},
        errors: '',
        redirect: null, 
        quizzes: [],
        questions: [],
        answers: []
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
                    user: res,
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

    fetchAnswers(){
        fetch(baseURL+`/answers`) 
        .then(res => res.json())
        .then(answers => this.setState({answers: answers}))
    }

    render(){
        console.log(this.state)
        return(
            <div>
                {this.state.redirect}
                <Nav handleLogout={this.handleLogout}/>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/home' component={PersonalHome}/>
                    <Route exact path='/login' render={()=> (<Login handleLogin={this.handleLogin}/>)} />
                    <Route exact path='/profile' render={()=> (<Profile user={this.state.user}/>)} />
                </Switch>
            </div>
        )
    }
}

export default RoutesContainer