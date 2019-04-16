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

    async getComments() {
        await console.log('comments prop:', this.props.comments)
        let currentId = parseInt(this.state.threadId)
        const threadComments = await this.props.comments.filter(comment => {
            return comment.threadId === currentId
        })
        console.log('threadComments:', threadComments)
        this.setState({
            threadComments: threadComments
        })
        // console.log(this.threadComments)
        return threadComments
    }

    componentDidMount() {
        this.getThreads()
        // this.getComments()
    }

    componentDidUpdate() {
        // this.getComments()
    }


    render() {
        const createTime = new Date(this.state.thread.createdAt)
        let threadUser = this.props.users.find(user => user.id === this.state.thread.userId)
        if (!threadUser) threadUser = {name: ''} 
        console.log(threadUser)
        return (
            <div className='single_thread_page'>
                {/* <div className='xthread_page_title'> </div> */}

                <div className='thread_page_title'>
                    <h1>{this.state.thread.title}</h1>
                </div>

                <div className='wrap-thread-boxes'>
                    <div className='threadbox'>
                        <p>By {threadUser.name} </p>
                        <p>Created on {createTime.toLocaleString()}</p>
                        <p>{this.state.thread.content}</p>

                    </div>


                    <UpdateThread threadId={this.state.threadId} />

                    <button id={this.state.threadId} onClick={event => {this.props.handleDeleteThreads(event);
                    this.props.history.push('/')}} >Delete</button>

                    <div className='comment_widget'>

                        <CreateComment threadId={this.state.threadId} />
                    </div>

                    <div>
                        {this.state.threadComments &&
                            this.state.threadComments.map(comment => (
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
