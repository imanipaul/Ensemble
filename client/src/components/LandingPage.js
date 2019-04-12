import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css';

const URL = 'http://localhost:1340'

class LandingPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    handleLogOut = () => {
        localStorage.removeItem('token')
        this.setState({ isLoggedIn: false })
        alert('Logged out!')
    }

    handleLogIn = async event => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = {
            nameOrEmail: formData.get("nameOrEmail"),
            password: formData.get("password")
        }
        const resp = await fetch(URL + '/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const pResp = await resp.json()
        console.log(pResp)
        if (pResp.token) localStorage.setItem('token', pResp.token)
        this.setState({ isLoggedIn: true })
        await alert(pResp.message)
    }

    handleSignUp = async event => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password")
        }
        const resp = await fetch(URL + '/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const pResp = await resp.json()
        await console.log(pResp)
        if (pResp.token) localStorage.setItem('token', pResp.token)
        this.setState({ isLoggedIn: true })
        alert(pResp.message)
    }

    componentDidMount() {
        if (localStorage.getItem('token')) this.setState({ isLoggedIn: true })
    }

    render() {
        return (

            <div className='landing-page'>
                <nav>
                    <h1>Logo</h1>
                    <a href='#'>Cat1</a>
                    <a href='#'>Cat2</a>
                    <a href='#'>Cat3</a>
                </nav>

                <div className='content'>
                    <div className='recent-posts'>
                        <h2>Recent Posts</h2>

                        {this.props.threads.map(thread => (
                            <Link to={`/Thread/${thread.id}`} key={thread.id}>{thread.title}</Link>
                        ))}
                    </div>

                    <form className='login' onSubmit={this.handleLogIn}>
                        <h2>LogIn</h2>
                        <input type='text' name='nameOrEmail' placeholder='name or email'></input>
                        <input type='password' name='password' placeholder='password'></input>
                        <button>Login</button>
                    </form>

                    <form className='signup' onSubmit={this.handleSignUp}>
                        <h2>Signup</h2>
                        <input type='text' name='name' placeholder='name'></input>
                        <input type='email' name='email' placeholder='email'></input>
                        <input type='password' name='password' placeholder='password'></input>
                        <button>Signup</button>
                    </form>
                    {this.state.isLoggedIn && <button onClick={this.handleLogOut}>Logout</button>}


                </div>

            </div>
        )
    }
}

export default LandingPage