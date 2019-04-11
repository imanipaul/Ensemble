import React from 'react'

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
                        <input type='text' placeholder='Add title here'></input>
                        <textarea rows='4' cols='40' name='post' form='thread-post'>Enter post here...</textarea>
                        <select>
                            <option value='Homework'>Homework</option>
                            <option value='Projects'>Projects</option>
                            <option value='Lessons'>Lessons</option>
                            <option value='Services'>Services</option>
                            <option value='Food'>Food</option>
                            <option value='Student Life'>Student Life</option>
                        </select>
                    </form>
                </header>

            </div>
        )
    }
}

export default LoggedIn