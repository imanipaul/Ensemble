import React from 'react'
import './CreateThread.css';

const url = 'http://localhost:3001'

class CreateThread extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            userId: this.props.currentUser.id,
            category: '',
            categoryId: '',
            image:''
        }
    }

    onFormChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = async (event) => {
        event.preventDefault()
        console.log('submitted')

        let data = {
            title: this.state.title,
            content: this.state.content,
            categoryId: parseInt(this.props.categoryId),
            userId: this.state.userId,
            image: this.state.image
        };
        // console.log('data', data)


        await fetch(`${url}/thread`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        })

        console.log('fetched')

        this.setState({
            title: '',
            content: '',
            category: '',
            categoryId: '',
            image:''

        })

        console.log('setstate cleared')

    }

    render() {
        return (
            <div>
                <form className="new_thread_form" name='thread_post' onSubmit={this.onFormSubmit}>
                    <input className='new_thread_title_input' type='text' placeholder='Add title here' name='title' onChange={this.onFormChange} value={this.state.title}></input>
                    <textarea className='new_thread_text_input' rows='4' cols='40' name='content' form='thread-post' onChange={this.onFormChange} value={this.state.content}>Enter new post here...</textarea>
                    <input type='text' name='image' onChange={this.onFormChange} value = {this.state.image} placeholder='image'/>
                    <button className='new_thread_submit_btn'>Submit</button>
                </form>
            </div>
        )
    }






}

export default CreateThread
