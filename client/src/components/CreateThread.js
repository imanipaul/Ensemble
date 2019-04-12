import React from 'react'

const url = 'http://localhost:1340/'

class CreateThread extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            category: ''
        }
    }

    onFormChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefaul()
        let data = {
            title: this.state.title,
            content: this.state.content
        };

        fetch(`${url}/thread`, {
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
        })

    }

    render() {
        return (
            <div></div>
        )
    }






}

export default CreateThread