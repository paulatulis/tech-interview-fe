import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Landing from '../components/Landing';
import Login from '../views/Login';

class RoutesContainer extends Component {
    render(){
        return(
            <div>
                <Route exact path='/' component={Landing} />
                <Route exact path='/login' component={Login} />
            </div>
        )
    }
}

export default RoutesContainer