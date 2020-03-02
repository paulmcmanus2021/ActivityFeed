import React, { Component } from 'react';
import PostList from '../components/PostList';

class MainContainer extends Component {
  constructor(props){
    super(props);
      this.state = {
        posts: []
      }
    }

    componentDidMount(){
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=50"
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
    .catch(err => console.error);
  }


  render(){
    return(
      <div>
        <PostList posts={this.state.posts} />
      </div>
    )
  }
}
  export default MainContainer;
