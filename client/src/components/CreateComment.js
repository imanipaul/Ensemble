import React, { Component } from 'react'

const url = 'http://localhost:1340/comment';

export default class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }

    onFormChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = event => {
        event.preventDefault();
        let data = {
            content: this.state.content

        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        })
        this.setState({
            title: "",
            content: ""
        })

    }







    render() {
        return (
            <div className='createCommentPage'>
                <h3>Respond to this thread</h3>
                <form onSubmit={this.onFormSubmit} id="thread-form">
                    <textarea rows='4' cols='40' className='commentbox' value={this.state.content} onChange={this.onFormChange} name='content' placeholder='Enter comments here'></textarea>
                    <button>Comment</button>

                </form>


            </div>
        )
    }
}
