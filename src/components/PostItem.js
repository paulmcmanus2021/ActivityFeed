import React from 'react';

function PostItem(props){
  return(
    <div>
      <h2>{props.title}</h2>
      <h4>{props.body}</h4>
      <button>See comments</button>
    </div>
  )
}

export default PostItem;
