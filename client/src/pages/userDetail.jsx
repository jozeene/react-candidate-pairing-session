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
          <h4 className="card-subtitle mb-2 text-muted">{userDetails.name}</h4>
        </div>
        <div style={{ minWidth: '18rem', marginLeft: '1rem', paddingLeft: '1rem' }}>
    
        <p className = "card-subtitle mb-2">{`Username: ${userDetails.username}`} </p>
        <p className = "card-subtitle mb-2">{`Email: ${userDetails.email}`} </p>
        <p className = "card-subtitle mb-2">{`Website: ${userDetails.address && userDetails.address.street}`} </p>
        </div>
        <div style={{ minWidth: '18rem', margin: '1rem', padding: '1rem' }}>
          <h2>Posts</h2>
             {postDetails.map(post => <PostItem post={post}/>)}
        </div> 
        <br/>
        </Page>;
    
}
return null;

    }
    
