import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Navbar =()=>{
    return(
    <nav className="navbar navbar-expand-lg navbar">
       <div className="container">
                <Link className="navbar-brand" to="/">MERN Auth</Link>
                <button className="navbar-toggler" type="button" data-toggle="#navbarsExample07" data-target="navbarsExample07" aria-controls="navbarsExample07" aria-label="Toggle Navigation">
                    <span className="navbar-toogler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarExample07">
                    <ul className= "navbar-nav mr-auto">
                        <li className="collapse navbar-collapse" id="navbarsExample07">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="collapse navbar-collapse" id="navbarsExample07">
                            <NavLink className="nav-link" exact to="/about">About</NavLink>
                        </li>

                    </ul>
                     {
                         props.isAuth ?
                         <ul className= "navbar-nav ml-auto">
                        <li className="collapse navbar-collapse" id="navbarsExample07">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
                        </li>

                    </ul>
                      :
                      <ul className= "navbar-nav ml-auto">
                        <li className="collapse navbar-collapse" >
                            <NavLink className="nav-link"  to="/signup">Create Account</NavLink>
                        </li>
                        <li className="nav-link" >
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>

                    </ul>
                     }

                </div>
            </div>
    </nav>
    )
}

export default Navbar;