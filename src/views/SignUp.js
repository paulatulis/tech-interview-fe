import React, { Component } from 'react';
import './SignUp.css';


class SignUp extends Component{
    render(){
        return(
            <div className="body-body">
                <div className="container">
                    <div className="row">
                        <form className="col s12" id="reg-form" onSubmit={this.props.handleSignUp}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="Type username here" name="username" type="text" className="validate">
                                    </input>
                                </div>
                                <div className="input-field col s6">
                                    <input placeholder="Type password here" name="password" type="password" className="validate">
                                    </input>
                                </div>
                                <div class="input-field col s6">
                                    <button class="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Register<i class="material-icons right">done</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default SignUp;