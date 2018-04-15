'use-strict'

import React from 'react';

class Hello extends React.Component {

  render() {
    return <h1>{this.props.msg}</h1>
  }
}

export default Hello