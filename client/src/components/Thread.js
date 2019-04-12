import React from 'react';
import './Thread.css';
import CreateComment from './CreateComment';

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
                        <h2 className='title'>Thread title.</h2><p>By'name' created on'date'</p>
                        <p>Loremn jbrebh wahrbe jrhgjk grwbjg wrgb</p>
                    </div>

                    <div className='threadpost'>

                        <CreateComment />

                    </div>

                </div>

            </div>
        )
    }
}

export default Thread