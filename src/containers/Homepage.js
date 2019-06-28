import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
//

export default withRouteData((data, b) => {
  var items = Object.keys(data)
    .filter((k) => {
      const item = data[k]
      return k === 'is404' ? false : true
    })
    .map(k => data[k])

  return (
    <div>
      <Link to={`/about`} className="help-link">Help</Link>
      <h1>Diagnostics analysis anomalies</h1>
      <div className="catalogue-grid">
        <p>{items.length} matching items</p>
        <div className="grid-items thumbs">
          {items.map((item) => {
            const outer_class = 'i-' + item.id + ' item thumbnail-wrapper'
            const inner_class = 'thumbnail-img'
            return <div className={outer_class} key={item.id}>
              <Link to={`/plot/${item.id}`} rel="external">
                <div className="thumbnail">
                  <div name="s2s_anomaly_cawcr_2MTM" className={inner_class}></div>
                  <div className="title">{item.title}</div>
                </div>
              </Link>
            </div>
          })}
        </div>
      </div>
    </div>
  )
})

