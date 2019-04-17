import React from 'react';
import './Thread.css';
import CreateComment from './CreateComment';
import UpdateThread from './UpdateThread';
import { withRouter } from 'react-router';
import LandingPage from './LandingPage';

// const url = 'http://localhost:3001'
const url = 'http://ensemble-ga.herokuapp.com'

class Thread extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            threadId: this.props.match.params.id,
            thread: {},
            threadComments: [],
            content: '',
            update: false,
        }

    }

    getThreads = async () => {
        await fetch(`${url}/thread/${this.props.match.params.id}`).then(response => {
            return response.json();
        }).then(data => {
            console.log(data)
            this.setState({
                thread: data.thread
            })
        })
    }

    getComments = async () => {
        let currentId = parseInt(this.state.threadId)
        const response = await fetch(url + '/comment')
        const data = await response.json()
        const threadComments = await data.filter(comment => {
            return comment.threadId === currentId
        })
        this.setState({
            threadComments: threadComments
        })
    }

    componentDidMount() {
        this.getThreads()
        this.getComments()
    }

    render() {
        const createTime = new Date(this.state.thread.createdAt)
        let currentId = parseInt(this.state.threadId)
        console.log(this.state.threadComments)
        let threadUser = this.props.users.find(user => user.id === this.state.thread.userId)
        if (!threadUser) threadUser = { name: '' }
        console.log(threadUser)
        return (
            <div className='single_thread_page'>
                <button className='go_back_button' onClick={this.props.history.goBack}>Go Back</button>

                <div className='thread_page_title'>
                    <h1>{this.state.thread.title}</h1>
                </div>
                <div className='thread_container'>
                    <div className='thread_container_post'>
                        <p className='thread_author'>By {threadUser.name} </p>
                        <p className='thread_created_date'>Created on {createTime.toLocaleString()}</p>
                        <p className='thread_content'>{this.state.thread.content}</p>

                       {this.props.currentUser.id === this.state.thread.userId && 
                          <button className=" delete_button" id={this.state.threadId} onClick={event => {
                              this.props.handleDeleteThreads(event);
                              this.props.history.push('/category/' + this.state.thread.categoryId)
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

                        <div>

                        {!!threadComments.length &&
                            threadComments.map(comment => (
                                <div className="thread_comment_container">
                                    <p key={comment.id}>{comment.content}</p>
                                </div>

                            ))
                        }
                        </div>










                    </div>


                    <UpdateThread threadId={this.state.threadId} update={this.state.update} getComments={this.getComments} />

                    {this.props.currentUser.id &&
                    <div className='comment_widget'>
                        <CreateComment getComments={this.props.getComments} threadId={this.state.threadId} update={this.update} getComments={this.getComments} />

                   </div>
                    }

                    {/* <div>

                        {!!this.state.threadComments.length &&
                            this.state.threadComments.map(comment => (
                                <div className="thread_comment_container">
                                    <p key={comment.id}>{comment.content}</p>
                                </div>

                            ))
                        }
                    </div> */}

                </div>

            </div>
        )
    }
}

export default withRouter(Thread);
