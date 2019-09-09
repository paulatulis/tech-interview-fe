import React, { Component } from 'react';

class Login extends Component {

    handleLogin = (e) => {
        e.preventDefault()
        console.log('here we are')
    }

    render(){
        return(
            <div className="login-form">
                <div className="row">
                    <form className="col s6" onSubmit={this.handleLogin}>
                        <div className="row">
                            <input placeholder="Type username here" id="first_name" type="text" className="validate"></input>
                            <label htmlFor="username">Username</label>
                            <input placeholder="Type password here" id="password" type="password" className="validate"></input>
                            <label htmlFor="password">Password</label>
                        </div>
                        <button className="waves-effect waves-light btn-small">Sign In</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default Login