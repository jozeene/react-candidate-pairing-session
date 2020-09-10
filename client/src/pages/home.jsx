import React from 'react';
import {Page} from "../components/page";

export function Home() {
  return <Page>
    <h4>Welcome to the Simple User App.</h4>
    <p>This application is designed to show us how you perform as a developer.</p>

    <br/>
    <h5>Tasks</h5>
    <p>In this test we will be asking you to:</p>
    <ul>
      <li>Create a new page in the <b>client</b> project to display a specific user.</li>
      <li>Create a new API endpoint in the <b>server</b> project to fetch posts for a user.</li>
      <li>Use that new API endpoint in the <b>client</b> project to populate the user page with these posts.</li>
    </ul>

    <br/>
    <h5>API</h5>
    A list of currently available API endpoints
    <ul>
      <li><pre>http://localhost:8000/user</pre></li>
      <li><pre>http://localhost:8000/user/[:userId]</pre></li>
      <li><pre>http://localhost:8000/post/[:postId]</pre></li>
    </ul>

    <br/>
    <h5>Technologies </h5>
    A non-exhaustive list of packages used:
    <ul>
      <li>React</li>
      <li>React Router</li>
      <li>Parcel</li>
      <li>Typescript</li>
      <li>Express</li>
      <li>OvernightJS</li>
    </ul>

  </Page>;
}
