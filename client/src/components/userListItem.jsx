import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

export function UserListItem(props) {

  return (
    <div className="card" style={{ minWidth: '18rem', margin: '1rem', padding: '1rem' }}>
      <h5 className="card-title">{props.user.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{`ID: ${props.user.id}`}</h6>
        <Link to={`/users/${props.user.id}`}>
      <button type="button" className="btn btn-primary">View User</button>
      </Link>
      
    </div>

  )
}
