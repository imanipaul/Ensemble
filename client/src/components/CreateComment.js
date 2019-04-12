import React, { Component } from 'react'

const url = 'http://localhost:1340/comment';

export default class CreateComment extends Component {  


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
