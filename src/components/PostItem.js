import React, { Component } from 'react'
import Toggle from'./Toggle'

class PostItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: []
    }
    this.capitalize = this.capitalize.bind(this);
  }

  capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  componentDidMount(){
    const baseUrl = "https://jsonplaceholder.typicode.com/comments?postId="
    fetch (baseUrl + this.props.postId)
    .then(res => res.json())
    .then(data => this.setState({comments: data}))
    .catch(err => console.error);
  }

  render(){
  return (
   <section className="one-post">
     <h3>{this.capitalize(this.props.title)}</h3>
     <p>{this.capitalize(this.props.body)}</p>
     <Toggle comments={this.state.comments} capitalize={this.state.capitalize} />
   </section>
  )
  }
}
export default PostItem;
