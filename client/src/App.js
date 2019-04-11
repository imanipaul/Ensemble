import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoggedIn from './components/LoggedIn'
import Profile from './components/Profile'
import Thread from './components/Thread'
import Category from './components/Category'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' render={() => <LandingPage />} />
          <Route path='/Home' render={() => <LoggedIn />} />
          <Route path='/Category' render={() => <Category />} />
          <Route path='/Profile' render={() => <Profile />} />
          <Route path='/Thread' render={() => <Thread />} />
        </Switch>
      </div>
    );
  }
}

export default App;
