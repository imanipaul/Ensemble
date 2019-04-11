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

                    </form>
                    <textarea rows='4' cols='40' name='post' form='thread-post'>Enter post here...</textarea>
                </header>

            </div>
        )
    }
}

export default LoggedIn