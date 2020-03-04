import React, { Fragment } from 'react';
import CommentItem from './CommentItem'


function Comments(props){

  const comments = props.comments.map((comment, index) => {
    return (
      <CommentItem key={index} title={comment.name} body={comment.body} author={comment.email}></CommentItem>
    )
  })



  return(
    <section className="post-comments">
      <h1>Comments about this post:</h1>
      {comments}
    </section>

  )
}

export default Comments;
