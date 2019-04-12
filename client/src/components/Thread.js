import React from 'react';
import './Thread.css';
import CreateComment from './CreateComment';

const url = 'http://localhost:1340'

class Thread extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            threadId: '',
            thread: {}
        }
    }

    async getThread() {
        await fetch(`${url}/thread/${this.props.match.params.id}`).then(response => {
            return response.json();
        }).then(data => {
            console.log(data)
            this.setState({
                thread: data
            })
        })
    }

    componentDidMount() {
        console.log('params:', this.props.match.params)
        this.getThread()
    }

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

                    {/* <div>{this.getThread}</div> */}

                    <div className='threadpost'>

                        <CreateComment />

                    </div>

                </div>

            </div>
        )
    }
}

export default Thread