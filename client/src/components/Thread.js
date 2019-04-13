import React from 'react';
import './Thread.css';
import Comment from './Comment';

const url = 'http://localhost:3001'

class Thread extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            threadId: this.props.match.params.id,
            thread: {}
        }
    }

    async getThread() {
        await fetch(`${url}/thread/${this.props.match.params.id}`).then(response => {
            return response.json();
        }).then(data => {
            console.log(data)
            this.setState({
                thread: data.thread
            })
        })
    }

    componentDidMount() {
        console.log('params:', this.props.match.params)
        this.getThread()
    }

    render() {
        return (
            <div className='single-thread-page'>
                <div className='thread page title'> </div>

                <div className='threadtitle'>
                    <h1>Thread Title One</h1>
                </div>
                <div className='wrap-thread-boxes'>
                    <div className='threadbox'>
                        <h2 className='title'>{this.state.thread.title}</h2>
                        <p>By'name' </p>
                        <p>Created on {this.state.thread.createdAt}</p>
                        <p>{this.state.thread.content}</p>
                    </div>

                    <div className='threadpost'>

                        <CreateComment threadId={this.state.threadId} />

                    </div>

                </div>

            </div>
        )
    }
}

export default Thread