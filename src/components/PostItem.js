import React from 'react';

function PostItem(props){

  function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  return(
    <section className="one-post">
      <h3>{capitalize(props.title)}</h3>
      <p>{capitalize(props.body)}</p>
      <button>See comments</button>
    </section>
  )
}

export default PostItem;
