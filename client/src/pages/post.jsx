import React from 'react';
import {Page} from "../components/page";
import {PostItem} from "../components/postItem";
import { useParams } from 'react-router-dom';

export function Post() {
    
    let {postId} = useParams();

    const [postDetails, setPostDetails] = React.useState([])
    const [users, setUsers] = React.useState([])
    const [error, setError] = React.useState('')
    
    React.useEffect(() => {
        fetch(`http://localhost:8000/post/${postId}`, {headers: {'Content-Type': 'application/json'}})
          .then(response => response.json())
          .then(setPostDetails)
          .catch(setError)
      }, [])
     
      React.useEffect(() => {
        fetch(`http://localhost:8000/user`, {headers: {'Content-Type': 'application/json'}})
          .then(response => response.json())
          .then(setUsers)
          .catch(setError)
      }, [])


    //for users

    if(postDetails) {

        const postUserId = postDetails.userId


    return <Page>

        
        <div style={{ minWidth: '18rem', margin: '1rem', padding: '1rem' }}>
        {error && `${error}`}
          <h4 className="card-subtitle mb-2">{postDetails.title}</h4>
            {users.filter(user => user.id == postUserId).map(filteredUser => (
            <p className="text-muted">{`Written by: ${filteredUser.name}`} </p>
          ))}
          
        </div>
        <div style={{ minWidth: '18rem', marginLeft: '1rem', paddingLeft: '1rem' }}>
          <p className = "card-subtitle mb-2">{postDetails.body}</p>
       
      </div>
        <br/>
        </Page>;
    
}
return null;

    }
    
