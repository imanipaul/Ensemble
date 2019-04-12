import React from 'react'
import './Thread.css'

class Thread extends React.Component {
    render() {
        return (
            <div className='single-thread-page'>
                <div className='thread page title'> </div>

                <div className='threadtitle'>
                    <h1>Thread Title One</h1>
                </div>
           <div className='wrap-thread-boxes'>
                <div className='threadbox'>
                    <h2 class>Thread title.</h2><p>By'name' created on'date'</p>
                    <p>Loremn jbrebh wahrbe jrhgjk grwbjg wrgb</p>
                  </div>

                    <div className='threadpost'>
                      <h3>Respond to this post</h3>
                      <form id="thread-form">
                        <input type='text' placeholder='Add subject here'></input>
                        <input type='text'className='commentbox' placeholder='Enter comments here'></input>
                        <button>Post</button>

                        </form>
              
                    
                </div>

</div>

            </div>
        )
    }
}

export default Thread