import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
//

export default withRouteData(({item}) => (
  <div>
    <p>
      <Link to="/">{'<'} Back</Link>
    </p>
    <h1>{item.title}</h1>
    <div className={`i-${item.id} big-chart`}>
      <div className="thumbnail-img">
      </div>
    </div>
  </div>
))

/*
export default withRouteData(({item}) => {
  return (
  <div>
    <img src={`/static/${item.path}`}/>
    <br />
  </div>
)})
*/
