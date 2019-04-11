import React from 'react'
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
                    <form name='thread-post'>
                        <input className='thread-post-title' type='text' placeholder='Add title here'></input>
                        <textarea rows='4' cols='40' name='post' form='thread-post'>Enter post here...</textarea>
                        <select>
                            <option value='Homework'>Homework</option>
                            <option value='Projects'>Projects</option>
                            <option value='Lessons'>Lessons</option>
                            <option value='Services'>Services</option>
                            <option value='Food'>Food</option>
                            <option value='Student Life'>Student Life</option>
                        </select>
                        <button className='thread-post-submit'>Submit</button>
                    </form>
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