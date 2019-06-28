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
    </ul>
  </div>
))
