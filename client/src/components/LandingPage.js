import React from 'react'
import './LandingPage.css';


class LandingPage extends React.Component {

    constructor(props) {
        super(props)
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
                        <a href="#">Thread 1</a>
                        <a href="#">Thread 2</a>
                        <a href="#">Thread 3</a>
                        <a href="#">Thread 4</a>
                        <a href="#">Thread 5</a>
                    </div>

                    <form className='login'>
                        <h2>LogIn/SignUp</h2>
                        <input type='text' placeholder='name'></input>
                        <input type='text' placeholder='email'></input>
                        <input type='text' placeholder='password'></input>
                        <button>Login</button>
                        <button>Signup</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default LandingPage