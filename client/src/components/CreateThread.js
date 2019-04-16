import React from 'react'

const url = 'http://localhost:3001'

class CreateThread extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            userId: this.props.currentUser.id,
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
            categoryId: this.state.categoryId,
            userId: this.state.userId
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
                <form name='thread-post' onSubmit={this.onFormSubmit}>
                    <input className='thread-post-title' type='text' placeholder='Add title here' name='title' onChange={this.onFormChange} value={this.state.title}></input>

                    <textarea rows='4' cols='40' name='content' form='thread-post' onChange={this.onFormChange} value={this.state.content}>Enter post here...</textarea>

                    <input className='thread-post-category' type='text' placeholder='Add category here' onChange={this.onFormChange} name='category' value={this.state.category}></input>

                    <button className='thread-post-submit'>Submit</button>

                </form>
            </div>
        )
    }






}

export default CreateThread
