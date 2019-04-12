import React, { Component } from 'react'

const url = '';

export default class CreateComment extends Component {
        constructor(props){
        super(props);
        this.state = {
            content: ""
        }
    }

    onFormChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value 
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
        <h2 className='title'>Comment</h2>
        <h3>Respond to this post</h3>
        <form id="thread-form">
          <input type='text'className='commentbox' value={this.state.content} onChange={this.onFormChange} name='content'  placeholder='Enter comments here'></input>
          <button>Post</button>

          </form>

      
  </div>
    )
  }
}
