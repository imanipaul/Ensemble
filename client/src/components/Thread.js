import React from 'react';
import './Thread.css';
import CreateComment from './CreateComment';
import UpdateThread from './UpdateThread';
import { withRouter } from 'react-router';
import LandingPage from './LandingPage';

const url = 'http://localhost:3001'

class Thread extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            threadId: this.props.match.params.id,
            thread: {},
            threadComments: [],
            comments: this.props.comments
        }
    }

    async getThreads() {
        await fetch(`${url}/thread/${this.props.match.params.id}`).then(response => {
            return response.json();
        }).then(data => {
            console.log(data)
            this.setState({
                thread: data.thread
            })
        })
    }

    // async getComments() {
    //     console.log('comments prop:', this.state.comments)
    //     let currentId = parseInt(this.state.threadId)
    //     const threadComments = await this.props.comments.filter(comment => {
    //         return comment.threadId === currentId
    //     })
    //     await console.log('threadComments:', threadComments)
    //     this.setState({
    //         threadComments: threadComments
    //     })
    //     return threadComments
    // }

    // async getComments() {
    //     await fetch(`${url}/comment/${this.props.match.params.id}`).then(response => {
    //         return response.json();
    //     }).then(data => {
    //         console.log(data)
    //         this.setState({
    //             thread: data.comment
    //         })
    //     })
    // }


    componentDidMount() {
        this.getThreads()
        // this.getComments()
    }

    // componentDidUpdate() {
    //     this.getComments()
    // }


    render() {
        const createTime = new Date(this.state.thread.createdAt)
        let currentId = parseInt(this.state.threadId)
        const threadComments = this.props.comments.filter(comment => {
            return comment.threadId === currentId
        })
        console.log('threadComments:', threadComments)  
        return (
            <div className='single-thread-page'>
                <div className='thread page title'> </div>

                <div className='threadtitle'>
                    <h1>{this.state.thread.title}</h1>
                </div>
                <div className='wrap-thread-boxes'>
                    <div className='threadbox'>
                        <p>By'name' </p>
                        <p>Created on {createTime.toLocaleString()}</p>
                        <p>{this.state.thread.content}</p>
                    </div>


                    <UpdateThread threadId={this.state.threadId} />

                    <button id={this.state.threadId} onClick={event => {this.props.handleDeleteThreads(event);
                    this.props.history.push('/')}} >Delete</button>

                    <div className='threadpost'>
                        <CreateComment threadId={this.state.threadId} />
                    </div>

                    <div>
                        {threadComments.length &&
                            threadComments.map(comment => (
                                <p key={comment.id}>{comment.content}</p>
                            ))
                        }
                    </div>

                </div>

            </div>
        )
    }
    }

export default withRouter(Thread);
