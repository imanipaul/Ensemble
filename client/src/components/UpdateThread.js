import React from 'react'

const url = 'http://localhost:3001'


class UpdateThread extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            // userId: '',
            category: '',
            categoryId: '',
            update: false
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
                <button onClick={(event) => {
                    event.preventDefault();
                    this.setState({
                        update: !this.state.update
                    })
                }}>Update</button>

                {this.state.update &&
                    <form name='thread-update' onSubmit={this.onFormSubmit}>

                        <input className='thread-post-title' type='text' placeholder='Add title here' name='title' onChange={this.onFormChange} value={this.state.title}></input>

                        <textarea rows='4' cols='40' name='content' form='thread-update' onChange={this.onFormChange} value={this.state.content}>Enter post here...</textarea>

                        <input className='thread-post-category' type='text' placeholder='Add category here' onChange={this.onFormChange} name='category' value={this.state.category}></input>

                        <button className='thread-post-submit'>Submit</button>

                    </form>
                }
            </div>
        )
    }
}

export default UpdateThread