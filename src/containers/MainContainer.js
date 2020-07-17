import React, { useState, useEffect, Fragment } from 'react';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';

const MainContainer = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


  useEffect(() => {
    const fetchPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=50")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error);
    }
    fetchPosts();
  }, []);

  
  


    if(posts.length === 0) {
      return <p>Loading...</p>}

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

      const paginate = (pageNumber) => setCurrentPage(pageNumber);




      return(
        <Fragment>
          <h1 className="main-title">Activity Feed</h1>
          <section className="post-list">
            <PostList posts={currentPosts} currentPage={currentPage} postsPerPage={postsPerPage} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          </section>
        </Fragment>
      )
    
  }

  export default MainContainer;
