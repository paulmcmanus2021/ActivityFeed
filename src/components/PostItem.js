import React from 'react';

function PostItem(props){

  function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return(
    <div>
      <h2>{capitalize(props.title)}</h2>
      <h4>{capitalize(props.body)}</h4>
      <button>See comments</button>
    </div>
  )
}

export default PostItem;
