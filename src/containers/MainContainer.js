import React, { Component, Fragment } from 'react';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';

class MainContainer extends Component {
  constructor(props){
    super(props);
      this.state = {
        posts: [],
        currentPage: 1,
        postsPerPage: 10
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

    if(this.state.posts.length === 0) {
      return <p>Loading...</p>}

      const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
      const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
      const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);

      const paginate = (pageNumber) => {this.setState({currentPage: pageNumber})
  }




      return(
        <Fragment>
          <h1 className="main-title">Activity Feed</h1>
          <section className="post-list">
            <PostList posts={currentPosts} currentPage={this.state.currentPage} postsPerPage={this.state.postsPerPage} />
            <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.posts.length} paginate={paginate} />
          </section>
        </Fragment>
      )
    }
  }

  export default MainContainer;
