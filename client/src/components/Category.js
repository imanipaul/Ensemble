import React from 'react'
import CreateThread from './CreateThread'
import './Category.css';


class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'homework'
        }
    }


    render() {
        return (
            <div className='category'>
                <h1>Category Name</h1>
                <div className='category-info'>
                    <div className='category-threads'>
                        <div className='category-thread'>
                            <h3>Thread Name</h3>
                            <p>by: name</p>
                            <p>created on: time</p>
                            <p>Number of Comments</p>
                        </div>
                        <div className='category-thread'>
                            <h3>Thread Name</h3>
                            <p>by: name</p>
                            <p>created on: time</p>
                            <p>Number of Comments</p>
                        </div>
                        <div className='category-thread'>
                            <h3>Thread Name</h3>
                            <p>by: name</p>
                            <p>created on: time</p>
                            <p>Number of Comments</p>
                        </div>
                        <div className='category-thread'>
                            <h3>Thread Name</h3>
                            <p>by: name</p>
                            <p>created on: time</p>
                            <p>Number of Comments</p>
                        </div>
                        <div className='category-thread'>
                            <h3>Thread Name</h3>
                            <p>by: name</p>
                            <p>created on: time</p>
                            <p>Number of Comments</p>
                        </div>
                        <div className='category-thread'>
                            <h3>Thread Name</h3>
                            <p>by: name</p>
                            <p>created on: time</p>
                            <p>Number of Comments</p>
                        </div>
                    </div>

                    <CreateThread />
                </div>

            </div>
        )
    }
}

export default Category