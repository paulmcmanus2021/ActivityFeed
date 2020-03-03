import React, { Component } from 'react';
import Comments from './Comments'


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
        {this.state.on && <Comments comments={this.props.comments} capitalize={this.state.capitalize} />}
        <button onClick={this.toggle}>Show/Hide Comments</button>
      </div>
    )
  }
}

export default Toggle;
