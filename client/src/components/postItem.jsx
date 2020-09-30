import React from 'react';
import { Link } from 'react-router-dom';

export function PostItem(props) {

  return (
    <div>
      <h5 className="card-title">{props.post.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{`ID: ${props.post.body}`}</h6>
      
      <Link to={`/posts/${props.post.id}`}>
      {/* <button type="button" className="btn btn-primary">Read More</button> */}
      <p>Read More</p>
      </Link>

    </div>

  )
}