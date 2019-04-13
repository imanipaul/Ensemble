import React, { Component } from 'react'
import CreateComment from './CreateComment';

const url = 'http://localhost:1340/comment'

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            comments:[]
        }
        this.getComment = this.getComment.bind(this);
    }

    onFormChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = async event => {
        event.preventDefault();
        let data = {
            content: this.state.content

        }

        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.setState({
                content: ""
            })
            return response.json();
        })

this.getComment();

    }



    getComment() {
        fetch(`${url}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({ comments: data.comment })
        })
    }

    componentDidMount(){
           this.getComment();
        }      
        
  
render() {

    // const displayComment = props.comment.map()
    return (
        <div className="comment-man" >
      
        <p>comment: </p>
     <CreateComment content ={this.state.content} onFormChange={this.onFormChange} onFormSubmit={this.onFormSubmit}/>
      </div>
    )
  }
}
