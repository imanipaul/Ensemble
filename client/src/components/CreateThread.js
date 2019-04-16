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
        console.log('submitted')

        let data = {
            title: this.state.title,
            content: this.state.content,
            categoryId: parseInt(this.props.categoryId),
            userId: this.state.userId
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

        })

        console.log('setstate cleared')

    }

    render() {
        // let categoryDropdown
        //  categoryDropdown = this.props.categories.map(category => <option value = {category.name}>{category.name}</option> )
        //  console.log(this.props)

        return (
            <div>
                <form name='thread-post' onSubmit={this.onFormSubmit}>
                    <input className='thread-post-title' type='text' placeholder='Add title here' name='title' onChange={this.onFormChange} value={this.state.title}></input>

                    <textarea rows='4' cols='40' name='content' form='thread-post' onChange={this.onFormChange} value={this.state.content}>Enter post here...</textarea>

                    <button className='thread-post-submit'>Submit</button>

                </form>
            </div>
        )
    }






}

export default CreateThread
