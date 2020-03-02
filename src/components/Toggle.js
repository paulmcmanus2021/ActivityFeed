import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    on: false
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }


  render() {
    return(
      <div>
        {this.state.on && <h1>Comments will be here</h1>}
        <button onClick={this.toggle}>Show/Hide Comments</button>
      </div>
    )
  }
}

export default Toggle;
