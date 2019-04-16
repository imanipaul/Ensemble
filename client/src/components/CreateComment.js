import React, { Component } from 'react'

const url = 'http://localhost:3001/comment';

export default class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            comments: []
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
            content: this.state.content,
            threadId: this.props.threadId

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
        const commentArray = []
        commentArray.push(data)
        this.setState({
            content: "",
            comments: commentArray
        })

    }

    render() {
        return (
            <div className='createCommentPage'>
                <h3>Respond to this post</h3>
                <form onSubmit={this.onFormSubmit} id="thread-form">
                    <textarea rows='4' cols='40' className='commentbox' value={this.state.content} onChange={this.onFormChange} name='content' placeholder='Enter comments here'></textarea>
                    <button>Comment</button>

                </form>


            </div>
        )
    }
}
