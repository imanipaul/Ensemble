import React from 'react'
import './CreateThread.css';

const url = 'http://localhost:3001'

class CreateThread extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            // userId: '',
            category: '',
            categoryId: ''
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
        let categoryName = this.state.category


        //sets category id from category name
        await fetch(`${url}/category/name/${categoryName}`).then(response => {
            return response.json();
        }).then(data => {
            console.log(data.category[0].id)
            this.setState({
                categoryId: data.category[0].id
            })
        })

        //set data for fetch body

        let data = {
            title: this.state.title,
            content: this.state.content,
            categoryId: this.state.categoryId
        };


        await fetch(`${url}/thread`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        })

        this.setState({
            title: '',
            content: '',
            category: '',
            categoryId: '',

        })

    }

    render() {
        return (
            <div>
                <form className="new_thread_form" name='thread_post' onSubmit={this.onFormSubmit}>
                    <input className='new_thread_title_input' type='text' placeholder='Add title here' name='title' onChange={this.onFormChange} value={this.state.title}></input>
                    <textarea className='new_thread_text_input' rows='4' cols='40' name='content' form='thread-post' onChange={this.onFormChange} value={this.state.content}>Enter new post here...</textarea>
                    <input className='new_thread_category_input' type='text' placeholder='Add category here' onChange={this.onFormChange} name='category' value={this.state.category}></input>
                    <button className='new_thread_submit_btn'>Submit</button>
                </form>
            </div>
        )
    }






}

export default CreateThread