import React from 'react';
import { Link } from 'react-router-dom';
// import Login from '../views/Login';
// import SignUp from '../views/SignUp';
// import Quiz from '../views/Quiz';
// import Profile from '../views/Profile';

function Nav(props) {
    return(
        <nav>
            <div className="nav-wrapper">
                 Here's where nav goes
                {/* {
                    localStorage.token ? 
                        <div className="logged-in">
                            <Link to="/" onClick={props.handleLogout}>Logout</Link> |
                            <Link to="/profile" component={Profile}> My Profile</Link> |
                            <Link to="/quiz" component={Quiz}> Take the Quiz</Link> |
                        </div>
                    :
                        <div className="logged-out">
                            <Link to='/login' component={Login}>Login</Link> |
                            <Link to='/sign_up' component={SignUp}> Sign Up</Link>
                        </div>   

                } */}

            </div>
        </nav>
    )
}

export default Nav