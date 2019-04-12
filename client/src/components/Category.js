import React from 'react'
import './Category.css';


class Category extends React.Component {
    constructor(props) {
        super(props)
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
                    <form name='category-post' className='category-post'>
                        <h3 className='create-new'>Create New Post:</h3>
                        <input type='text' placeholder='Add title here'></input>
                        <textarea rows='4' cols='40' name='post' form='category-post'>Enter post here...</textarea>
                        <button>Submit</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Category