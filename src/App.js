import React from 'react'
import { Root, Routes } from 'react-static'
import { Link, navigate } from '@reach/router'
import { Provider } from 'react-redux'
import Mousetrap from 'mousetrap'

//
import store from './connectors/redux'

//import template from './template.pug'

import './index.css'
import './app.css'
import './content.css'
import './grid.css'

function prev() {
	console.log('on_keypress', window.location.pathname.split('/'))
	var a = window.location.pathname.split('/')
	if(a.length === 3 && a[1] === 'plot'){
		const n = +a[2]
		if(n > 0){
			console.log('current=', +a[2])
			navigate('/plot/' + (+a[2] - 1))
		}
	}
}

function next() {
	console.log('on_keypress', window.location.pathname.split('/'))
	var a = window.location.pathname.split('/')
	if(a.length === 3 && a[1] === 'plot'){
		console.log('current=', +a[2])
		navigate('/plot/' + (+a[2] + 1))
	}
}

class KeyboardComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		console.log('didMount')
		Mousetrap.bind([',', 'ctrl+r', `up up down down left right left right b a enter`], prev)
		Mousetrap.bind(['.', `up up down down left right left right b a enter`], next)
	}

	render() {
		return <div>{this.props.children}</div>
	}
}

const App = () => (
  <Provider store={store}>
    <Root>
      <KeyboardComponent>
      <div className="container-fluid">
        <Routes />
      </div>
      </KeyboardComponent>
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
