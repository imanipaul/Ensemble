import React from 'react'
import CreateThread from './CreateThread'
import { Link } from 'react-router-dom'
import './Category.css'
import './CreateThread.css'



class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            filteredThreads: [],
            currentCategory: []
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

    getCurrentCategory() {
        let currentId = parseInt(this.state.id)
        const currentCategory = this.props.categories.filter(category => {
            return category.id === currentId
        })
        this.setState({
            currentCategory: currentCategory[0]
        })
    }

    componentDidMount() {
        this.getCategoryThreads()
        this.getCurrentCategory()
    }



    render() {
        return (
            <div className='category_page'>
                {this.state.currentCategory &&
                    <h1 className='category_page_title'>{this.state.currentCategory.name}</h1>}
                <div className='category_section'>
                    <div className='category_container'>
                        {this.state.filteredThreads &&
                            this.state.filteredThreads.map(thread => (
                                <div className='category_thread_container' key={thread.id}>
                                    <Link className='container_title' to={`/Thread/${thread.id}`} key={thread.id}>{thread.title}</Link>
                                    <p className='thread_author'>by: name</p>
                                    <p className='thread_created_on'>created on: {thread.createdAt}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='create_new_thread_container'>
                    <h3 className='create_new_thread_title'>Create a new thread</h3>
                    <CreateThread />
                    </div>
                </div>

            </div>
        )
    }
}

export default Category