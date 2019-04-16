import React from 'react'
import CreateThread from './CreateThread'
import { Link } from 'react-router-dom'
import './Category.css'
import './CreateThread.css'
import { withRouter } from 'react-router'



class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryId: this.props.match.params.id,
            filteredThreads: [],
            currentCategory: []
        }

    }

    getCategoryThreads = () => {
        let currentId = parseInt(this.state.categoryId)
        const filteredThreads = this.props.threads.filter(thread => {
            return thread.categoryId === currentId
        })
        this.setState({
            filteredThreads: filteredThreads
        })
        // this.props.refreshThreads()
    }

    getCurrentCategory = () => {
        let currentId = parseInt(this.state.categoryId)
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
            <div className='category_page'>
      

                <button onClick={this.props.history.goBack}>Go Back</button>


                {this.state.currentCategory &&
                    <h1 className='category_page_title'>{this.state.currentCategory.name}</h1>
                }
                <div className='category_section'>
                    <div className='category_container'>
                        {this.state.filteredThreads &&
                            this.state.filteredThreads.map(thread => (
                                <div className='category_thread_container' key={thread.id}>
                                    <Link className='category_container_title' to={`/Thread/${thread.id}`} key={thread.id}>{thread.title}</Link>
                                    <p className='category_thread_author'>By: {this.props.users && this.props.users.find(user => user.id === thread.userId).name}</p>
                                    <p className='category_thread_created_on'>Created on: {new Date(thread.createdAt).toLocaleString()}</p>

                                </div>
                            ))
                        }
                    {/* classes defined in CreateThread.css */}
                    {this.props.currentUser.id &&
                      <div className='create_new_thread_widget'>
                      <h3 className='create_new_thread_title'>Create a new thread</h3>
                      <CreateThread  currentUser={this.props.currentUser} categoryId={this.state.categoryId} getCategoryThreads={this.props.refreshThreads}/>
                      </div>
                    }
                    </div>

                </div>

            </div>
        )
    }
}

export default Category
