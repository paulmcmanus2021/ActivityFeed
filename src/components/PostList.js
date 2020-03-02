import React, { Fragment } from 'react';
import PostItem from './PostItem';

function PostList(props){

  const postList = props.posts.map((post, index) => {
    return (
      <PostItem title={post.title} body={post.body} key={index}></PostItem>
    )
  })

  return(
    <Fragment>
      {postList}
    </Fragment>

  )
}

export default PostList;
