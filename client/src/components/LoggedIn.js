import React from 'react'
import CreateThread from './CreateThread'
import './LoggedIn.css'

class LoggedIn extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='home-page'>
                <header>
                    <h1>Welcome</h1>
                    <CreateThread />
                </header>
                <div className='threads'>
                    <div className='category'>
                        <h3>Homework</h3>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                    </div>
                    <div className='category'>
                        <h3>Projects</h3>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                    </div>
                    <div className='category'>
                        <h3>Lessons</h3>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                    </div>
                    <div className='category'>
                        <h3>Services</h3>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                    </div>
                    <div className='category'>
                        <h3>Food</h3>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                    </div>
                    <div className='category'>
                        <h3>Student Life</h3>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                        <a href='#'>Thread title</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoggedIn