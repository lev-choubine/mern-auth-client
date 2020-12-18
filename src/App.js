import React, {useEffect, useState} from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'

import './App.css';

import Welcome from './Components/Welcome';
import Navbar from './Components/Navbar'
import { Component } from 'react';



const PrivateRoute =({component: Component, ...rest})=>{
const user = localStorage.getIem('jwtToken');
return <Route {...rest} render={(props)=>{
return user ? <Component { ...rest }/> : <Redirect to="/login" />
}}/>
}

 
function App() {
const[currentUser, setCurrentUser] = useState('');
const[isAuthenticated, setIsAuthenticated]=useState(true);
useEffect(()=>{
  let token;
  if(!localStorage.getItem('jwtToken')){
    setIsAuthenticated(false);
  }else{
    token = jwt_decode(localStorage.getItem('jwtToken'));
    setAuthToken(localStorage.jwtToken)
    setCurrentUser(token)
  }
}, [])

const nowCurrentUser = (userData) => {
  console.log('nowCurrebtUser is here...');
  setCurrentUser(userData);
  setIsAuthenticated(true);
}

const handleLogout = () => {
  if(locatStorage.getItem('jwtToken')){
    localStorage.removeItem('jwtToken')
    setCurrrentUser(null)
    setIsAuthenticated(false);
  }
}

  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated}/>
    <Welcome />
    </div>
  );
}

export default App;
