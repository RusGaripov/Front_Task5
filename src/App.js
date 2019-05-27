//import React from 'react';
//import Head from "./components/Head"
//import Images from "./components/Images"
//import Greeting from "./components/Greeting"
//import Video from "./components/Video"


import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Users from './components/Users';
import './App.css';

//function App() {
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <h2>Football magazine</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/contact'} className="nav-link">Register</Link></li>
                <li><Link to={'/about'} className="nav-link">Log in</Link></li>
                <li><Link to={'/users'} className="nav-link">Users</Link></li>
              </ul>
            </nav>
            <hr />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Register} />
              <Route path='/about' component={LogIn} />
              <Route path='/users' component={Users} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
