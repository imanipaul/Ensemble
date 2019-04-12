import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoggedIn from './components/LoggedIn'
import Profile from './components/Profile'
import Thread from './components/Thread'
import Category from './components/Category'
import CreateComment from './components/CreateComment'

const url = 'http://localhost:1340'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      threads: []
    }

    // this.getThreads = this.getThreads.bind(this)
  }

  getThreads() {
    fetch(`${url}/thread`).then(response => {
      return response.json();
    }).then(data => {
      console.log(data)
      this.setState({
        threads: data
      })
    })
  }

  componentDidMount() {
    this.getThreads()
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/'
            render={() => <LandingPage threads={this.state.threads} />}
          />
          <Route path='/Home' render={() => <LoggedIn />} />
          <Route path='/Category' render={() => <Category />} />
          <Route path='/Profile' render={() => <Profile />} />
          <Route path='/Thread' render={() => <Thread />} />
          <Route path='/CreateComment' render={() => <CreateComment />} />
        </Switch>
      </div>
    );
  }
}

export default App;
