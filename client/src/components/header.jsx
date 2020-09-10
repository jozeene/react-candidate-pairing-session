import React from 'react';
import {Link} from "react-router-dom";

export function Header() {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Simple User App</Link>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/users">Users</Link>
      </li>
    </ul>
  </nav>
}