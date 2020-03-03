import React, { Fragment } from 'react';


function Comments(props){

  const comments = props.comments.map((comment, index) => {
    return (
      <Fragment>
        <h3>{index + 1}.{comment.name}</h3>
        <p>{comment.body}</p>
        <p>-{comment.email}</p>
      </Fragment>
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
