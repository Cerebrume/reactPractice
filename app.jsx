'use-strict'

import React from 'react'
import ReactDom from 'react-dom';
/* import Hello from './components/hello/';
import Timer from './components/timer/'; 
import Box from './components/box/'*/
/* import Clicker from './components/clicker/'; */
import StopWatch from './components/stopWatch/';

//ReactDom.render(<Hello msg="Hello World"/>, document.getElementById('root'));
/* setInterval(() => {
    ReactDom.render(<Timer />, document.getElementById('root'));
    console.log('tick');
}, 1000) */

/* ReactDom.render(<Box size="small" style={{backgroundColor: 'blue'}}>Small box</Box>, document.getElementById('root'));
 */
/* ReactDom.render(<Clicker />,document.getElementById('root')); */
ReactDom.render(<StopWatch />,document.getElementById('root'));