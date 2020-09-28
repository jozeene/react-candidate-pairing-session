import React from 'react';
import {Page} from "../components/page";
import {UserListItem} from "../components/userListItem";
import {Route, useParams} from "react-router-dom";

export function User(id) {
  
    let { id} = useParams();

    return <Page>
      <h2>{`User: ${props.user.name}`}</h2>
      <h6>{`ID: ${props.user.id}`}</h6>
      <div className='row'>
        {users.map(user => <UserListItem user={user}/>)}
      </div>
  
    </Page>;
  }