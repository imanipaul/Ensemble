import React from 'react'
import './Profile.css';


class Profile extends React.Component {
    render() {
        return (
            <div className='profile'>
                <h1>My Posts</h1>
                <div className='profile-info'>
                    <div className='profile-threads'>
                        <div className='profile-thread'>
                            <h3>Thread Name</h3>
                            <p>by: me</p>
                            <p>created on: time</p>
                            <p>Number of Comments</p>
                        </div>
                        <div className='profile-thread'>
                            <h3>Thread Name</h3>
                            <p>by: me</p>
                            <p>created on: time</p>
                            <p>Number of Comments</p>
                        </div>
                        <div className='profile-thread'>
                            <h3>Thread Name</h3>
                            <p>by: me</p>
                            <p>created on: time</p>
                            <p>Number of Comments</p>
                        </div>
                        <div className='profile-thread'>
                            <h3>Thread Name</h3>
                            <p>by: me</p>
                            <p>created on: time</p>
                            <p>Number of Comments</p>
                        </div>
                        <div className='profile-thread'>
                            <h3>Thread Name</h3>
                            <p>by: me</p>
                            <p>created on: time</p>
                            <p>Number of Comments</p>
                        </div>
                        <div className='profile-thread'>
                            <h3>Thread Name</h3>
                            <p>by: me</p>
                            <p>created on: time</p>
                            <p>Number of Comments</p>
                        </div>
                    </div>

                    <div className='side-boxes'>
                        <form name='profile-post' className='profile-post'>
                            <h3 className='profile-create-new'>Create New Post:</h3>
                            <input type='text' placeholder='Add title here'></input>
                            <textarea rows='4' cols='40' name='post' form='category-post'>Enter post here...</textarea>
                            <button>Submit</button>
                        </form>

                        <div className='my-profile'>
                            <h3 className='myprofile'>My Profile</h3>
                            <p>Number of posts</p>
                            <p>Number of comments</p>
                            <p>My Name</p>
                            <p>My Email</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile