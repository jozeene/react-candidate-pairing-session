import React from 'react';

export function PostItem(props) {

  return (
    <div className="card">
      <h5 className="card-title">{props.post.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{`ID: ${props.post.body}`}</h6>
    </div>

  )
}