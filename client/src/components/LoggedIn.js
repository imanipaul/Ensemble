import React from 'react'
import CreateThread from './CreateThread'
import { Link } from 'react-router-dom'
import './LoggedIn.css'

class LoggedIn extends React.Component {

    constructor(props) {
        super(props)
    }

    getCategoryThreads(id) {

        const filteredThreads = this.props.threads.filter(thread => {
            return thread.categoryId === id
        })
        return filteredThreads
    }

    renderThreads(id) {
        return this.getCategoryThreads(id).map(thread => {
            return <Link to={`/Thread/${thread.id}`} key={thread.id}>{thread.title}</Link>
        })
    }


    render() {
        return (
            <div className='home-page'>
                <header>
                    <h1>Welcome UserName</h1>
                    <CreateThread />
                </header>

                <div className='threads'>
                    <div className='category-allthreads'>
                        <h3>Homework</h3>
                        {this.renderThreads(1)}
                    </div>
                    <div className='category-allthreads'>
                        <h3>Projects</h3>
                        {this.renderThreads(2)}
                    </div>
                    <div className='category-allthreads'>
                        <h3>Lessons</h3>
                        {this.renderThreads(3)}
                    </div>
                    <div className='category-allthreads'>
                        <h3>Services</h3>
                        {this.renderThreads(4)}
                    </div>
                    <div className='category-allthreads'>
                        <h3>Food</h3>
                        {this.renderThreads(5)}
                    </div>
                    <div className='category-allthreads'>
                        <h3>Student Life</h3>
                        {this.renderThreads(6)}
                    </div>
                </div>
            </div>
        )
    }
}

export default LoggedIn