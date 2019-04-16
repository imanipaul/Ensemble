import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Profile from './components/Profile'
import Thread from './components/Thread'
import Category from './components/Category'
import CreateComment from './components/CreateComment'

import decode from 'jwt-decode'

const url = 'http://localhost:3001'

let currentUser = { id: null, name: 'Anonymous' }
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      threads: [],
      categories: [],
      comments: [],
      users: [],
      isLoggedIn: false
    }
    this.getThreads = this.getThreads.bind(this)
    this.handleDeleteThreads = this.handleDeleteThreads.bind(this)
  }

  getThreads() {
    fetch(`${url}/thread`)
      .then(response => {
        return response.json();
      }).then(data => {
        console.log(data)
        this.setState({
          threads: data
        })
      })
  }

  async getUsers() {
    const response = await fetch(`${url}/users`)
    const data = await response.json()
    await this.setState({ users: data.allUsers })
    await console.log(this.state.users)
  }

  // delete thread function

  async handleDeleteThreads(event) {
    event.preventDefault();
    await fetch(`${url}/thread/${event.target.id}`, {
      method: 'DELETE'
    }).then(response => {
      return response.json();
    })
    this.getThreads();
  }

  async getCategories() {
    const response = await fetch(`${url}/category`)
    const data = await response.json()
    console.log(data)
    this.setState({
      categories: data.allCategories
    })
  }

  //delete Category function

  async handleDeleteCategories(event) {
    event.preventDefault();
    await fetch(`${url}/category/${event.target.id}`, {
      method: 'DELETE'
    }).then(response => {
      return response.json();
    })
    this.getCategories();
  }

  getComments() {
    fetch(`${url}/comment`).then(response => {
      return response.json()
    }).then(data => {
      console.log('comments', data)
      this.setState({
        comments: data
      })
    })
  }


  // Delete Comment function

  async handleDeleteComments(event) {
    event.preventDefault();
    await fetch(`${url}/comment/${event.target.id}}`, {
      method: 'DELETE'
    }).then(response => {
      return response.json();
    })
    this.getComments();
  }

  handleLogOut = () => {
    localStorage.removeItem('token')
    this.setState({ isLoggedIn: false })
    alert('Logged out!')
  }

  handleLogIn = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    if (formData.get("nameOrEmail") !== '' && formData.get("password") !== '') {
      const data = {
        nameOrEmail: formData.get("nameOrEmail"),
        password: formData.get("password")
      }
      const resp = await fetch(url + '/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const pResp = await resp.json()
      console.log(pResp)
      if (pResp.token) {
        localStorage.setItem('token', pResp.token)
        this.setState({ isLoggedIn: true })
      }
      await alert(pResp.message)
    } else {
      alert('One or more login inputs missing')
    }
  }

  handleSignUp = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    if (formData.get("name") !== '' && formData.get("password") !== '' && formData.get("email") !== '') {
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password")
      }
      const resp = await fetch(url + '/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const pResp = await resp.json()
      await console.log(pResp)
      if (pResp.token) {
        localStorage.setItem('token', pResp.token)
        this.setState({ isLoggedIn: true })
      }
      alert(pResp.message)
    } else {
      alert('One or more signup inputs are missing')
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({ isLoggedIn: true })
    }
    this.getThreads()
    this.getCategories()
    this.getComments()
    this.getUsers()
  }


  render() {
    if (localStorage.getItem('token')) {
      currentUser = decode(localStorage.getItem('token'))
    } else {
      currentUser = { id: null, name: 'Anonymous' }
    }
    console.log(currentUser)
    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/'
            render={() => <LandingPage threads={this.state.threads} categories={this.state.categories} handleLogIn={this.handleLogIn} handleLogOut={this.handleLogOut} handleSignUp={this.handleSignUp} isLoggedIn={this.state.isLoggedIn} currentUser={currentUser} />}
          />

          <Route
            path='/Category/:id'
            render={(props) => <Category {...props} threads={this.state.threads} categories={this.state.categories} currentUser={currentUser} users={this.state.users} />} />

          <Route path='/Profile' render={() => <Profile />} />

          <Route
            path='/Thread/:id'
            render={(props) => <Thread {...props} threads={this.state.threads} comments={this.state.comments} handleDeleteThreads={this.handleDeleteThreads} currentUser={currentUser} users={this.state.users} />} />

          {/* <Route path='/CreateComment' render={() => <CreateComment />} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
