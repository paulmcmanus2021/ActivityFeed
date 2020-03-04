import React from 'react'

function CommentItem(props){

  function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <section className="comment-item">
      <h4>{capitalize(props.title)}</h4>
      <p>"{capitalize(props.body)}"</p>
      <p>-{props.author}</p>
    </section>
  )
}
export default CommentItem;
