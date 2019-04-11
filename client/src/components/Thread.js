import React from 'react'

class Thread extends React.Component {
    render() {
        return (
            <div className='single-thread-page'>
                <div className='thread page title'>
                    <h1>Thread Title One</h1>
                </div>
                <div className='threadbox'>
                    <h2>Thread title. By'name' created on'date'</h2>
                    <p>Loremn jbrebh wahrbe jrhgjk grwbjg wrgb</p>


                    <div className='threadpost'>
                      <h3>Respond to this post</h3>
                        <input type='text' placeholder='Add subject here'></input>
                        <input type='text'className='commentbox' placeholder='Enter comments here'></input>
                        <button>Post</button>

                    </div>
                </div>




            </div>
        )
    }
}

export default Thread