import React, { Component } from 'react'

const url = '';

export default class CreateComment extends Component {
        constructor(props){
        super(props);
        this.state = {
            title: "",
            content: ""
        }
    }

    onFormChange = event => {
        const { title, value } = event.target;
        this.setState({
            [title]: value
        })
    }












  render() {
    return (
      <div>
        
      </div>
    )
  }
}
