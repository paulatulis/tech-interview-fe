import React, { Component } from 'react';

class Login extends Component {

    render(){
        return(
            <div className="login-form">
                <div className="row">
                    <form className="col s6" onSubmit={this.props.handleLogin}>
                        <div className="row">
                            <input placeholder="Type username here" name="username" type="text" className="validate"></input>
                            <label htmlFor="username">Username</label>
                            <input placeholder="Type password here" name="password" type="password" className="validate"></input>
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