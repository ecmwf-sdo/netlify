import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'
import { Provider } from 'react-redux'

//
import store from './connectors/redux'

//import template from './template.pug'

import './index.css'
import './app.css'
import './content.css'
import './grid.css'

const AppX = () => (
  <Provider store={store}>
    <div>
      <div className="menu-collapse-overlay"/>
      <Root>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <div className="content">
            <Routes />
          </div>
        </div>
      </Root>
    </div>
  </Provider>
)

const App = () => (
  <Provider store={store}>
    <Root>
      <div className="container-fluid">
        <Routes />
      </div>
    </Root>
  </Provider>
)
/*
const App = () => template.call(this, {
	page: {
		scripts: []
	}
	//options: { filename: '/home/tim/hackathon/site/src/template.jade' }
})
*/

export default App
