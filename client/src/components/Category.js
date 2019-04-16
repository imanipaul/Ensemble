import React from 'react'
import CreateThread from './CreateThread'
import { Link } from 'react-router-dom'
import './Category.css';



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
        console.log(this.props)
    }

    componentDidMount() {
        this.getCategoryThreads()
        this.getCurrentCategory()
    }



    render() {
        return (
            <div className='category'>
                {this.state.currentCategory &&

                    <h1>{this.state.currentCategory.name}</h1>}

                <div className='category-info'>
                    <div className='category-threads'>

                        {this.state.filteredThreads &&
                            this.state.filteredThreads.map(thread => (

                                <div className='category-thread' key={thread.id}>

                                    <Link to={`/Thread/${thread.id}`} key={thread.id}>{thread.title}</Link>
                                    <p>By: {this.props.users.find(user => user.id === thread.userId).name}</p>
                                    <p>Created on: {new Date(thread.createdAt).toLocaleString()}</p>
                                </div>

                            ))
                        }


                    </div>
                    <h3>Create a new thread</h3>
                    <CreateThread currentUser={this.props.currentUser}/>
                </div>

            </div>
        )
    }
}

export default Category
