import React from 'react';
import {Page} from "../components/page";
import {PostItem} from "../components/postItem";
import { useParams } from 'react-router-dom';

export function UserDetail() {
    
    let {userId} = useParams();

    const [userDetails, setUserDetails] = React.useState([])
    const [postDetails, setPostDetails] = React.useState([])
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        fetch(`http://localhost:8000/user/${userId}`, {headers: {'Content-Type': 'application/json'}})
          .then(response => response.json())
          .then(setUserDetails)
          .catch(setError)
      }, [])
    
    React.useEffect(() => {
        fetch(`http://localhost:8000/post/user/${userId}`, {headers: {'Content-Type': 'application/json'}})
          .then(response => response.json())
          .then(setPostDetails)
          .catch(setError)
      }, [])
    
    if(userDetails) {

    return <Page>
        
        <div style={{ minWidth: '18rem', margin: '1rem', padding: '1rem' }}>
        {error && `${error}`}
          <h4 className="card-subtitle mb-2 text-muted">ID: {userId}</h4>
        </div>
        <div>
        <p>{userDetails.name}</p>
        <p>{userDetails.username}</p>
        <p>{userDetails.email}</p>
        <p>{userDetails.website}</p>
        </div>
        <div>
          <h2>Posts</h2>
             {postDetails.map(post => <PostItem post={post}/>)}
        </div> 
        <br/>
        </Page>;
    
}
return null;

    }
    
