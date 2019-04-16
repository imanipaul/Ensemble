import React from 'react'
import './UpdateThread.css';

// const url = 'http://localhost:3001'
const url = 'http://ensemble-ga.herokuapp.com'


class UpdateThread extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            // userId: '',
            category: '',
            categoryId: '',

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
        let data = {
            title: this.state.title,
            content: this.state.content,
        };

        await fetch(`${url}/thread/${this.props.threadId}`, {
            method: 'PUT',
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
            categoryId: ''
        })

    }



    render() {
        return (
            <div>


                {this.props.update &&
                    <form className='thread_update_widget' onSubmit={this.onFormSubmit}>
                        <p className="thread_update_widget_title">Update This Thread</p>
                        <input className='thread_update_title' type='text' placeholder='Add title here' name='title' onChange={this.onFormChange} value={this.state.title}></input>

                        <textarea className='thread_update_textarea' rows='4' cols='40' name='content' placeholder='Enter comments here' form='thread-update' onChange={this.onFormChange} value={this.state.content}>Enter post here...</textarea>

                        <input className='thread_update_category' type='text' placeholder='Add category here' onChange={this.onFormChange} name='category' value={this.state.category}></input>

                        <button className='thread_update_submit_btn'>Update</button>



                    </form>

                }

            </div>
        )
    }
}

export default UpdateThread