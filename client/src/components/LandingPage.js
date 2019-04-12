import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css';


const LandingPage = props => {


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

                    {props.threads.map(thread => (
                        <Link to={`/Thread/${thread.id}`} key={thread.id}>{thread.title}</Link>
                    ))}

                </div>
                <form className='login'>
                    <h2>LogIn</h2>
                    <input type='text' name='nameOrEmail' placeholder='name or email'></input>
                    <input type='password' name='password' placeholder='password'></input>
                    <button>Login</button>
                </form>

                <form className='signup'>
                    <h2>Signup</h2>
                    <input type='text' name='name' placeholder='name'></input>
                    <input type='email' name='email' placeholder='email'></input>
                    <input type='password' name='password' placeholder='password'></input>
                    <button>Signup</button>
                </form>

            </div>

        </div>
    )
}


export default LandingPage