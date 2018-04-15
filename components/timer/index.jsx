'use-strict'

import React from 'react';

class Timer extends React.Component{
    render() {
        let time = new Date();
        time = time.toLocaleString();
        return (
            <div>
                <h1>
                It is {time}
                </h1>
            </div>)
    }
}

export default Timer