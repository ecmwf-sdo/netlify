import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
//

export default withRouteData(({ posts }) => (
  <div>
    <h1>Charts index</h1>
    <br />
    All charts:
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
