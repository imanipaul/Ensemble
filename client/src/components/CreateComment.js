import React, { Component } from 'react'

const url = 'http://localhost:3001/comment';

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
        this.setState({
            title: "",
            content: ""
        })

    }







    render() {
        return (
            <div className='createCommentPage'>
                <h2 className='title'>Comment</h2>
                <h3>Respond to this post</h3>
                <form onSubmit={this.props.onFormSubmit} id="thread-form">
                    <textarea rows='4' cols='40' className='commentbox' value={this.props.comment} onChange={this.props.onFormChange} name='content' placeholder='Enter comments here'></textarea>
                    <button>Comment</button>

                </form>


            </div>
        )
    }
}
