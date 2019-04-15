import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import logo from '../images/ensemble-logo.png';
import bgImage from '../images/bgimage.jpg';

const URL = 'http://localhost:3001'

const styles = {
    content_container: {     
        backgroundImage: `url(${bgImage})`
    }
};

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
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
            <div className='landing_page'>
                <nav className="nav_container">
                    <div className="nav_items">
                    <img className="logo-style" src={logo}/>
                    {this.props.categories.map(category => (
                        <Link to={`/Category/${category.id}`} key={category.id}>{category.name}</Link>
                    ))}
                    {this.state.isLoggedIn && <button className="logout_button" onClick={this.handleLogOut}>Logout</button>}
                    </div>
                </nav>
                
                <div className='content_container' style={styles.content_container}>
                    <div className='recent_posts_section'>
                        <h2 className="recent_posts_sec_title">Recent Posts</h2>
                        <div className='recent_posts_items'>
                        {this.props.threads.map(thread => (
                            <Link to={`/Thread/${thread.id}`} key={thread.id}>{thread.title}</Link>
                        ))}
                        </div>
                    </div>

                    <form className='login_form' onSubmit={this.handleLogIn}>
                        <h2 className="login_form_title">Login</h2>
                        <input className="input_box" type='text' name='nameOrEmail' placeholder='name or email'></input>
                        <input className="input_box" type='password' name='password' placeholder='password'></input>
                        <button className="login_button">Login</button>
                    </form>

                    <form className='signup_form' onSubmit={this.handleSignUp}>
                        <h2 className="signup_form_title">Sign Up</h2>
                        <input className="input_box" type='text' name='name' placeholder='name'></input>
                        <input className="input_box" type='email' name='email' placeholder='email'></input>
                        <input className="input_box" type='password' name='password' placeholder='password'></input>
                        <button className="signup_button">Signup</button>
                    </form>
                    
                    {/* {this.state.isLoggedIn && <button onClick={this.handleLogOut}>Logout</button>} */}


                </div>
                <h1 className='tagline_text'>Where General Assembly Alumni and students convene.</h1>
            </div>
        )
    }
}

export default LandingPage