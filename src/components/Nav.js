import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


function Nav(props) {
    return(
        <nav>
            <div className="nav-wrapper">
                {
                    localStorage.token ? 
                        <div className="logged-in">
                            <Link to="/" onClick={props.handleLogout}>Logout</Link> |
                            <Link to="/profile" href="/profile"> My Profile</Link> |
                            <Link to="/home" href="/home"> Home </Link> |
                            <Link to="/quiz" href="/quiz"> Take the Quiz</Link> 
                        </div>
                    :
                        <div className="logged-out">
                            <Link to='/login' href="/login">Login</Link> |
                            <Link to='/sign_up' href='/sign_up'> Sign Up</Link>
                        </div>   

                }

            </div>
        </nav>
    );
};

export default Nav;