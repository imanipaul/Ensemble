import React from 'react'
import CreateThread from './CreateThread'
import { Link } from 'react-router-dom'
import './Category.css';


// const url = 'http://localhost:3001'


class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            filteredThreads: []
        }

    }

    getCategoryThreads() {
        let currentId = parseInt(this.state.id)
        const filteredThreads = this.props.threads.filter(thread => {
            return thread.categoryId === currentId
        })
        this.setState({
            filteredThreads: filteredThreads
        })
        return filteredThreads
    }

    renderThreads() {
        this.getCategoryThreads()
        return this.state.filteredThreads.map(thread => (
            <div>{thread.name}</div>
        ))
    }

    componentDidMount() {
        this.renderThreads()
    }



    render() {
        return (
            <div className='category'>
                <h1>Category Name</h1>
                <div className='category-info'>
                    <div className='category-threads'>

                        {this.state.filteredThreads &&
                            this.state.filteredThreads.map(thread => (

                                <div className='category-thread'>

                                    <Link to={`/Thread/${thread.id}`} key={thread.id}>{thread.title}</Link>
                                    <p>by: name</p>
                                    <p>created on: {thread.createdAt}</p>
                                </div>

                            ))
                        }


                    </div>

                    <CreateThread />
                </div>

            </div>
        )
    }
}

export default Category