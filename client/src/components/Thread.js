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
            title: '',
            content: '',
            update: false
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
        this.getComments()
    }

    componentDidUpdate() {
        // this.getComments()
    }


    render() {
        const createTime = new Date(this.state.thread.createdAt)
        let threadUser = this.props.users.find(user => user.id === this.state.thread.userId)
        if (!threadUser) threadUser = { name: '' }
        console.log(threadUser)
        return (
            <div className='single_thread_page'>
                <button onClick={this.props.history.goBack}>Go Back</button>

                <div className='thread_page_title'>
                    <h1>{this.state.thread.title}</h1>
                </div>
                <div className='thread_container'>
                    <div className='thread_container_post'>
                        <p className='thread_author'>By {threadUser.name} </p>
                        <p className='thread_created_date'>Created on {createTime.toLocaleString()}</p>
                        <p className='thread_content'>{this.state.thread.content}</p>
                        <img alt="" src={this.state.thread.image}/>
                        

                       {this.props.currentUser.id === this.state.thread.userId && 
                          <button className=" delete_button" id={this.state.threadId} onClick={event => {
                              this.props.handleDeleteThreads(event);
                              this.props.history.push('/')
                          }} >Delete</button>
                       }
  
                       {this.props.currentUser.id === this.state.thread.userId && 
                          <button className="update_button" onClick={(event) => {
                              event.preventDefault();
                              this.setState({
                                  update: !this.state.update
                              })
                          }}>Edit</button>
                       }

                    </div>


                    <UpdateThread threadId={this.state.threadId} update={this.state.update} />

                    {/* <button id={this.state.threadId} onClick={event => {this.props.handleDeleteThreads(event);
                    this.props.history.push('/')}} >Delete</button> */}

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
