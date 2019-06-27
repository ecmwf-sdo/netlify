import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
//

//      <Link to="/">{'<'} Back</Link>
export default withRouteData(({item}) => (
  <div>
    <p style={{marginTop: '10px'}}>
      <a href="/">{'<'} Back</a>
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
