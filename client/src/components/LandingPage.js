import React from 'react'

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
                <div>
                    <h2>Recent Posts</h2>
                    <a href="#">Thread 1</a>
                    <a href="#">Thread 2</a>
                    <a href="#">Thread 3</a>
                    <a href="#">Thread 4</a>
                    <a href="#">Thread 5</a>
                </div>
                <h2>LogIn/SignUp</h2>
                <form>

                    <input type='text' placeholder='name'></input>
                    <input type='text' placeholder='email'></input>
                    <button>Login</button>
                    <button>Signup</button>
                </form>

            </div>
        )
    }
}

export default LandingPage